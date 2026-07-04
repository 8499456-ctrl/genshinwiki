// ====== Comment Embed — reusable for any page ======
// Usage: CommentEmbed.mount('comment-container', { page: 'home', title: 'Comments' })
window.CommentEmbed = {
  mount: function(containerId, opts) {
    const el = document.getElementById(containerId);
    if (!el) return;
    opts = opts || {};
    const page = opts.page || 'home';
    const title = opts.title || '💬 Comments';
    const subtitle = opts.subtitle || 'Share your thoughts — we read every comment.';

    el.innerHTML = `
      <div class="comment-section">
        <h2>${title}</h2>
        <p class="sub">${subtitle}</p>
        <div class="cform">
          <div class="cerror" id="cerror-${page}"></div>
          <div class="crow">
            <input type="text" id="cname-${page}" placeholder="Your name" maxlength="50" autocomplete="off">
            <input type="text" id="cemail-${page}" placeholder="Email (optional)" maxlength="100" autocomplete="off">
          </div>
          <textarea id="ctext-${page}" placeholder="Write your comment..." maxlength="2000"></textarea>
          <div class="bwrap">
            <span class="charcount"><span id="ccount-${page}">0</span>/2000</span>
            <div style="display:flex;gap:8px;align-items:center;">
              <span id="membadge-${page}" style="display:none;" class="member-tag">✨ Member</span>
              <button class="btn-post" id="cbtn-${page}" onclick="CommentEmbed.post('${page}')">Post Comment</button>
            </div>
          </div>
        </div>
        <div id="clist-${page}">
          <div class="cspin" id="cspin-${page}">Loading comments...</div>
        </div>
      </div>
    `;

    // Character count
    document.getElementById('ctext-' + page).addEventListener('input', function() {
      document.getElementById('ccount-' + page).textContent = this.value.length;
    });

    // Check login status
    (async function() {
      try {
        const r = await fetch('/api/me');
        const d = await r.json();
        if (d.member) {
          document.getElementById('membadge-' + page).style.display = 'inline';
          if (d.email) {
            document.getElementById('cname-' + page).value = d.email.split('@')[0];
            document.getElementById('cname-' + page).disabled = true;
            document.getElementById('cemail-' + page).value = d.email;
          }
        }
      } catch(e) {}
    })();

    CommentEmbed.load(page);
  },

  load: async function(page) {
    const listEl = document.getElementById('clist-' + page);
    const spinEl = document.getElementById('cspin-' + page);
    try {
      const r = await fetch('/api/comments?page=' + encodeURIComponent(page));
      const d = await r.json();
      if (spinEl) spinEl.style.display = 'none';
      if (!d.comments || d.comments.length === 0) {
        listEl.innerHTML += '<div class="cempty">No comments yet. Be the first!</div>';
        return;
      }
      let html = '';
      for (const c of d.comments) {
        const time = new Date(c.createdAt).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit' });
        html += '<div class="citem">' +
          '<div class="meta">' +
            '<span class="name">' + CommentEmbed._esc(c.name) + '</span>' +
            (c.isMember ? '<span class="mbadge">✨ Member</span>' : '') +
            '<span class="time">' + time + '</span>' +
          '</div>' +
          '<div class="ctext">' + CommentEmbed._esc(c.content) + '</div>' +
        '</div>';
      }
      listEl.innerHTML += html;
    } catch(e) {
      if (spinEl) spinEl.style.display = 'none';
      listEl.innerHTML += '<div class="cempty">Failed to load comments. Try again later.</div>';
    }
  },

  post: async function(page) {
    const name = document.getElementById('cname-' + page).value.trim();
    const content = document.getElementById('ctext-' + page).value.trim();
    const email = document.getElementById('cemail-' + page).value.trim() || null;
    const btn = document.getElementById('cbtn-' + page);
    const errorEl = document.getElementById('cerror-' + page);

    errorEl.style.display = 'none';
    if (!name) { CommentEmbed._showError(page, 'Please enter your name.'); return; }
    if (!content) { CommentEmbed._showError(page, 'Please write something.'); return; }

    btn.disabled = true;
    btn.textContent = 'Posting...';

    try {
      // Get auth token from localStorage
      const token = localStorage.getItem('auth_token');
      const payload = { name, content, email, page, token };
      // Try POST (Cloudflare Workers API), fallback to GET with data in URL if POST fails
      const r = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // Check if response is actually JSON before parsing
      const ct = r.headers.get('content-type') || '';
      let d;
      if (ct.includes('application/json')) {
        d = await r.json();
      } else {
        // Got HTML back (probably static file catch-all), try GET-param method
        const text = await r.text();
        throw new Error('API returned non-JSON: ' + text.substring(0, 100));
      }
      if (d.success || d.ok) {
        document.getElementById('ctext-' + page).value = '';
        document.getElementById('ccount-' + page).textContent = '0';
        // Reload comments
        const listEl = document.getElementById('clist-' + page);
        listEl.innerHTML = '<div class="cspin" id="cspin-' + page + '">Loading comments...</div>';
        CommentEmbed.load(page);
      } else {
        CommentEmbed._showError(page, d.error || 'Failed to post.');
      }
    } catch(e) {
      CommentEmbed._showError(page, '⚠️ ' + e.message);
      console.error('Comment post error:', e);
    }

    btn.disabled = false;
    btn.textContent = 'Post Comment';
  },

  _showError: function(page, msg) {
    const el = document.getElementById('cerror-' + page);
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 4000);
  },

  _esc: function(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }
};
