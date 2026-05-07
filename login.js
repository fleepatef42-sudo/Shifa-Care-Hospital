const authApi = window.ShifaCareAuth;

function normalizeDisplayName(identifier) {
    const trimmed = identifier.trim();
    if (!trimmed) return 'مستخدم النظام';

    if (!trimmed.includes('@')) return trimmed;

    const localPart = trimmed.split('@')[0].replace(/[._-]+/g, ' ').trim();
    return localPart
        .split(' ')
        .filter(Boolean)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ') || trimmed;
}

function buildUserPayload(identifier) {
    const displayName = normalizeDisplayName(identifier);
    return {
        name: displayName,
        role: 'مدير النظام',
        email: identifier.includes('@') ? identifier.trim() : `${identifier.trim()}@shifacare.local`,
        remember: document.getElementById('remember-session')?.checked ?? false
    };
}

document.addEventListener('DOMContentLoaded', () => {
    if (authApi?.isAuthenticated()) {
        window.location.replace('dashboard.html');
        return;
    }

    const form = document.getElementById('login-form');
    const identifierInput = document.getElementById('login-identifier');
    const passwordInput = document.getElementById('login-password');
    const errorBox = document.getElementById('login-error');

    if (!form || !identifierInput || !passwordInput || !errorBox) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const identifier = identifierInput.value.trim();
        const password = passwordInput.value.trim();

        if (identifier.length < 3) {
            errorBox.textContent = 'اكتب اسم مستخدم أو بريد وظيفي صالح.';
            return;
        }

        if (password.length < 4) {
            errorBox.textContent = 'كلمة المرور قصيرة جدًا.';
            return;
        }

        errorBox.textContent = '';
        authApi?.set(buildUserPayload(identifier));
        window.location.replace('dashboard.html');
    });
});
