/**
 * ShifaCare Hospital Management System
 * Professional operations dashboard edition
 */

const state = {
    summary: {
        totalPatients: 1287,
        todayAppointments: 145,
        availableBeds: 42,
        totalBeds: 150,
        todayRevenue: 128400,
        occupancyRate: 78,
        avgWait: 11,
        satisfaction: 94,
        readiness: 96,
        doctorsOnDuty: 27,
        emergencyOpen: 8
    },
    patients: [
        { id: '#PT-8472', name: 'محمد علي', dept: 'أمراض القلب', doctor: 'د. سارة خالد', date: '2026-05-01', status: 'critical', room: '302-A' },
        { id: '#PT-8471', name: 'فاطمة حسن', dept: 'طب الأطفال', doctor: 'د. يوسف أمين', date: '2026-04-30', status: 'stable', room: '105-B' },
        { id: '#PT-8469', name: 'عمر فاروق', dept: 'جراحة العظام', doctor: 'د. كريم حسن', date: '2026-04-30', status: 'recovering', room: '201-C' },
        { id: '#PT-8465', name: 'سارة عبد الله', dept: 'الطوارئ', doctor: 'د. هدى مصطفى', date: '2026-04-29', status: 'stable', room: 'ER-04' }
    ],
    doctors: [
        { id: '#DOC-001', name: 'د. سارة خالد', spec: 'أمراض القلب', degree: 'استشاري', experience: 12, status: 'available', img: 'https://i.pravatar.cc/160?img=5' },
        { id: '#DOC-002', name: 'د. يوسف أمين', spec: 'طب الأطفال', degree: 'أخصائي', experience: 8, status: 'in-clinic', img: 'https://i.pravatar.cc/160?img=11' },
        { id: '#DOC-003', name: 'د. كريم حسن', spec: 'جراحة العظام', degree: 'استشاري', experience: 15, status: 'available', img: 'https://i.pravatar.cc/160?img=12' },
        { id: '#DOC-004', name: 'د. هدى مصطفى', spec: 'الطوارئ والعناية', degree: 'استشاري', experience: 10, status: 'on-leave', img: 'https://i.pravatar.cc/160?img=32' }
    ],
    appointments: [
        { id: 1, time: '09:00', period: 'صباحاً', patient: 'زينب عبد الله', dept: 'قسم الباطنة', doctor: 'د. يوسف أمين', status: 'confirmed' },
        { id: 2, time: '10:30', period: 'صباحاً', patient: 'محمود شاكر', dept: 'قسم الأشعة', doctor: 'د. كريم حسن', status: 'pending' },
        { id: 3, time: '12:00', period: 'ظهراً', patient: 'ليلى عثمان', dept: 'الجراحة العامة', doctor: 'د. هدى مصطفى', status: 'confirmed' },
        { id: 4, time: '14:15', period: 'مساءً', patient: 'نورا إبراهيم', dept: 'أمراض القلب', doctor: 'د. سارة خالد', status: 'confirmed' }
    ],
    inventory: [
        { code: 'MED-104', name: 'Paracetamol 500mg', cat: 'مسكنات', qty: 4500, min: 500, status: 'stable' },
        { code: 'MED-892', name: 'Amoxicillin 250mg', cat: 'مضادات حيوية', qty: 120, min: 200, status: 'warning' },
        { code: 'SUP-045', name: 'Syringes 5ml', cat: 'مستلزمات', qty: 0, min: 50, status: 'critical' },
        { code: 'LAB-017', name: 'Blood Tubes', cat: 'مختبر', qty: 670, min: 120, status: 'stable' }
    ],
    billing: [
        { id: 'INV-101', patient: 'محمد علي', amount: 450, method: 'بطاقة', status: 'paid' },
        { id: 'INV-102', patient: 'فاطمة حسن', amount: 920, method: 'تحويل', status: 'pending' },
        { id: 'INV-103', patient: 'ليلى عثمان', amount: 1310, method: 'نقدي', status: 'paid' }
    ],
    notifications: [
        { id: 1, title: 'حالة طارئة', text: 'وصول حالة حرجة لقسم الطوارئ الآن', time: 'منذ دقيقتين', icon: 'fa-truck-medical', color: 'critical' },
        { id: 2, title: 'موعد جديد', text: 'تم حجز موعد جديد في قسم العظام', time: 'منذ 15 دقيقة', icon: 'fa-calendar-check', color: 'stable' },
        { id: 3, title: 'نقص مخزون', text: 'وصل مخزون الأنسولين للحد الأدنى', time: 'منذ ساعة', icon: 'fa-box-open', color: 'warning' }
    ],
    departments: [
        { name: 'الطوارئ', occupancy: 92, wait: '6 دقائق', lead: 'د. هدى مصطفى', priority: 'critical', note: 'ارتفاع ملحوظ في الحالات الحرجة', rooms: '3 غرف فرز فوري' },
        { name: 'أمراض القلب', occupancy: 74, wait: '14 دقيقة', lead: 'د. سارة خالد', priority: 'stable', note: 'تدفق مستقر مع متابعة قسطرة مجدولة', rooms: '12 سرير عناية قلبية' },
        { name: 'طب الأطفال', occupancy: 58, wait: '9 دقائق', lead: 'د. يوسف أمين', priority: 'stable', note: 'نسبة إشغال مريحة خلال الفترة الحالية', rooms: '9 غرف متابعة' },
        { name: 'العناية المركزة', occupancy: 88, wait: 'مراقبة مباشرة', lead: 'د. ندى عادل', priority: 'warning', note: 'قرب امتلاء وحدات الرعاية الحرجة', rooms: '3 أسرة متاحة' }
    ],
    priorities: [
        { title: 'متابعة سعة العناية المركزة', text: 'تبقى 3 أسرة فقط متاحة مع احتمالية ارتفاع الإشغال بنهاية الوردية الحالية.', level: 'critical' },
        { title: 'تأكيد توريد المضادات الحيوية', text: 'يوجد عنصران في المخزون يقتربان من الحد الأدنى ويحتاجان اعتماد شراء سريع.', level: 'warning' },
        { title: 'مراجعة جدول الأطباء المسائي', text: 'هناك ضغط متزايد في الطوارئ ويُفضّل تعزيز التغطية خلال الساعات الثلاث القادمة.', level: 'stable' }
    ],
    activityFeed: [
        { title: 'استقبال حالة طارئة', text: 'تم تحويل حالة نزيف داخلي مباشرة إلى الأشعة ثم غرفة العمليات.', time: 'قبل 5 دقائق', level: 'critical', icon: 'fa-triangle-exclamation' },
        { title: 'إنهاء مراجعة مالية', text: 'تمت مطابقة دفعات الفترة الصباحية واعتماد تقرير التحصيل اليومي.', time: 'قبل 22 دقيقة', level: 'stable', icon: 'fa-file-circle-check' },
        { title: 'تنبيه من المخزون', text: 'قسم الصيدلية طلب إعادة تعبئة عاجلة لمضاد حيوي واسع الاستخدام.', time: 'قبل 40 دقيقة', level: 'warning', icon: 'fa-capsules' },
        { title: 'تحديث جدول العمليات', text: 'تم تقديم عمليتين مجدولتين بسبب توفر الفريق الجراحي مبكرًا.', time: 'قبل ساعة', level: 'stable', icon: 'fa-user-doctor' }
    ],
    profile: {
        name: 'د. أحمد محمود',
        role: 'مدير النظام / استشاري أول',
        email: 'ahmed.m@shifacare.com',
        phone: '+966 50 123 4567',
        dept: 'إدارة العمليات الطبية',
        joined: '12 يناير 2020',
        branch: 'فرع الرياض المركزي',
        shift: 'وردية الإدارة الصباحية'
    }
};

const authApi = window.ShifaCareAuth;
const defaultProfile = { ...state.profile };
const numberFormatter = new Intl.NumberFormat('ar-EG');
const currencyFormatter = new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    maximumFractionDigits: 0
});

const getAvatar = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0F6CBD&color=fff&bold=true`;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (match) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[match]));

function requireAuth() {
    if (authApi?.isAuthenticated()) return authApi.get();

    window.location.replace('login.html');
    return null;
}

function syncProfileFromAuth(authState) {
    const safeName = authState?.name || defaultProfile.name;
    const safeRole = authState?.role || defaultProfile.role;
    const safeEmail = authState?.email || defaultProfile.email;

    state.profile.name = safeName;
    state.profile.role = safeRole;
    state.profile.email = safeEmail;

    const profileName = document.getElementById('profile-name');
    const profileRole = document.getElementById('profile-role');
    const profileAvatar = document.getElementById('profile-avatar');

    if (profileName) profileName.textContent = safeName;
    if (profileRole) profileRole.textContent = safeRole;
    if (profileAvatar) {
        profileAvatar.src = getAvatar(safeName);
        profileAvatar.alt = safeName;
    }
}

const statusMaps = {
    patient: {
        critical: { label: 'حرجة', className: 'critical' },
        stable: { label: 'مستقرة', className: 'stable' },
        recovering: { label: 'تحت التعافي', className: 'recovering' }
    },
    doctor: {
        available: { label: 'متاح', className: 'stable' },
        'in-clinic': { label: 'في العيادة', className: 'warning' },
        'on-leave': { label: 'في إجازة', className: 'neutral' }
    },
    appointment: {
        confirmed: { label: 'مؤكد', className: 'stable' },
        pending: { label: 'بانتظار التأكيد', className: 'warning' }
    },
    inventory: {
        stable: { label: 'متوفر', className: 'stable' },
        warning: { label: 'قريب من الحد الأدنى', className: 'warning' },
        critical: { label: 'نقص حرج', className: 'critical' }
    },
    priority: {
        critical: { label: 'عاجل', className: 'critical' },
        warning: { label: 'مهم', className: 'warning' },
        stable: { label: 'تحت السيطرة', className: 'stable' }
    },
    billing: {
        paid: { label: 'مدفوعة', className: 'stable' },
        pending: { label: 'قيد التحصيل', className: 'warning' }
    }
};

const getStatusMeta = (group, key) => statusMaps[group]?.[key] || { label: escapeHtml(key), className: 'neutral' };
const renderStatus = (group, key) => {
    const meta = getStatusMeta(group, key);
    return `<span class="status ${meta.className}">${meta.label}</span>`;
};

const renderPageHeader = (title, description, actions = '') => `
    <div class="page-header">
        <div>
            <span class="section-label">تشغيل المستشفى</span>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="page-actions">${actions}</div>
    </div>
`;

const renderViews = () => ({
    dashboard: `
        <div class="animated-view">
            <section class="hero-panel">
                <div class="hero-copy">
                    <span class="hero-badge">
                        <i class="fa-solid fa-wave-square"></i>
                        مركز القيادة التشغيلية
                    </span>
                    <h2>صورة تشغيلية شاملة للمستشفى خلال اليوم</h2>
                    <p>
                        نظرة تنفيذية موحدة على السعة التشغيلية، مستوى الخدمة، والمخاطر العاجلة
                        حتى تتمكن الإدارة من اتخاذ القرار بسرعة ووضوح.
                    </p>
                    <div class="hero-actions">
                        <button class="btn-primary" onclick="loadView('add-patient')">
                            <i class="fa-solid fa-user-plus"></i>
                            إضافة مريض
                        </button>
                        <button class="btn-outline" onclick="loadView('appointments')">
                            <i class="fa-solid fa-calendar-days"></i>
                            إدارة المواعيد
                        </button>
                    </div>
                </div>

                <div class="hero-side-grid">
                    <div class="hero-mini-card">
                        <span>جاهزية التشغيل</span>
                        <strong>${numberFormatter.format(state.summary.readiness)}%</strong>
                        <small>جاهزية ممتازة مع بقاء 3 أولويات مفتوحة فقط</small>
                    </div>
                    <div class="hero-mini-card">
                        <span>رضا المراجعين</span>
                        <strong>${numberFormatter.format(state.summary.satisfaction)}%</strong>
                        <small>تحسن بمقدار 4 نقاط عن الأسبوع الماضي</small>
                    </div>
                    <div class="hero-mini-card">
                        <span>متوسط الانتظار</span>
                        <strong>${numberFormatter.format(state.summary.avgWait)} دقيقة</strong>
                        <small>ضمن الهدف التشغيلي للأقسام الأساسية</small>
                    </div>
                    <div class="hero-mini-card">
                        <span>التغطية الطبية</span>
                        <strong>${numberFormatter.format(state.summary.doctorsOnDuty)} طبيبًا</strong>
                        <small>توزيع مناوبات متوازن عبر الأقسام الحيوية</small>
                    </div>
                </div>
            </section>

            <div class="stats-grid">
                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">إجمالي المرضى</span>
                        <div class="stat-icon blue"><i class="fa-solid fa-users"></i></div>
                    </div>
                    <div class="stat-details">
                        <h2>${numberFormatter.format(state.summary.totalPatients)}</h2>
                        <span class="stat-trend up">+8% عن أمس</span>
                    </div>
                    <p class="stat-caption">يشمل التنويم، المراجعات اليومية، وحالات المتابعة المباشرة.</p>
                </article>

                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">مواعيد اليوم</span>
                        <div class="stat-icon green"><i class="fa-solid fa-calendar-check"></i></div>
                    </div>
                    <div class="stat-details">
                        <h2>${numberFormatter.format(state.summary.todayAppointments)}</h2>
                        <span class="stat-trend up">91% نسبة التزام</span>
                    </div>
                    <p class="stat-caption">مع إعادة جدولة 6 مواعيد فقط خلال الفترة الصباحية.</p>
                </article>

                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">الأسرة المتاحة</span>
                        <div class="stat-icon orange"><i class="fa-solid fa-bed-pulse"></i></div>
                    </div>
                    <div class="stat-details">
                        <h2>${numberFormatter.format(state.summary.availableBeds)}</h2>
                        <span class="stat-trend down">${numberFormatter.format(state.summary.totalBeds)} سرير إجمالي</span>
                    </div>
                    <p class="stat-caption">الأولوية الحالية موجهة للعناية المركزة والطوارئ.</p>
                </article>

                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">إيرادات اليوم</span>
                        <div class="stat-icon purple"><i class="fa-solid fa-wallet"></i></div>
                    </div>
                    <div class="stat-details">
                        <h2>${currencyFormatter.format(state.summary.todayRevenue)}</h2>
                        <span class="stat-trend up">+12% عن المتوسط</span>
                    </div>
                    <p class="stat-caption">تحصيل قوي من العيادات الخارجية والخدمات التشخيصية.</p>
                </article>
            </div>

            <div class="dashboard-grid">
                <section class="glass-panel panel-span-2">
                    <div class="panel-header">
                        <div>
                            <h3>الأقسام الطبية</h3>
                            <p>نظرة سريعة على السعة والقيادة السريرية لكل قسم حيوي.</p>
                        </div>
                        <button class="btn-outline" onclick="loadView('departments')">عرض التفاصيل</button>
                    </div>
                    <div class="department-grid">
                        ${state.departments.map((dept) => `
                            <article class="department-card">
                                <div class="department-header">
                                    <div>
                                        <h4>${escapeHtml(dept.name)}</h4>
                                        <p>${escapeHtml(dept.lead)}</p>
                                    </div>
                                    ${renderStatus('priority', dept.priority)}
                                </div>
                                <div class="department-stats">
                                    <div>
                                        <span>نسبة الإشغال</span>
                                        <strong>${numberFormatter.format(dept.occupancy)}%</strong>
                                    </div>
                                    <div>
                                        <span>متوسط الانتظار</span>
                                        <strong>${escapeHtml(dept.wait)}</strong>
                                    </div>
                                </div>
                                <div class="progress-track">
                                    <span class="progress-fill ${dept.priority}" style="width: ${dept.occupancy}%"></span>
                                </div>
                                <div class="department-footer">
                                    <span>${escapeHtml(dept.note)}</span>
                                    <strong>${escapeHtml(dept.rooms)}</strong>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </section>

                <section class="glass-panel">
                    <div class="panel-header">
                        <div>
                            <h3>الأولويات الحالية</h3>
                            <p>بنود تحتاج متابعة من الإدارة خلال الساعات القادمة.</p>
                        </div>
                    </div>
                    <div class="priority-list">
                        ${state.priorities.map((item) => `
                            <div class="priority-item">
                                <div class="priority-top">
                                    <h4>${escapeHtml(item.title)}</h4>
                                    ${renderStatus('priority', item.level)}
                                </div>
                                <p>${escapeHtml(item.text)}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="glass-panel">
                    <div class="panel-header">
                        <div>
                            <h3>أحدث المرضى</h3>
                            <p>آخر الحالات التي تم تحديثها في النظام.</p>
                        </div>
                        <button class="btn-outline" onclick="loadView('patients-list')">عرض الكل</button>
                    </div>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>المريض</th>
                                    <th>القسم</th>
                                    <th>الطبيب</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${state.patients.slice(0, 4).map((patient) => `
                                    <tr>
                                        <td>
                                            <div class="table-user">
                                                <img src="${getAvatar(patient.name)}" alt="${escapeHtml(patient.name)}" class="table-avatar">
                                                <div>
                                                    <strong class="table-primary">${escapeHtml(patient.name)}</strong>
                                                    <span class="table-subtext">${escapeHtml(patient.id)} • غرفة ${escapeHtml(patient.room)}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>${escapeHtml(patient.dept)}</td>
                                        <td>${escapeHtml(patient.doctor)}</td>
                                        <td>${renderStatus('patient', patient.status)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="glass-panel">
                    <div class="panel-header">
                        <div>
                            <h3>النشاط التشغيلي</h3>
                            <p>تحديثات مباشرة من العمليات اليومية بالمستشفى.</p>
                        </div>
                    </div>
                    <div class="timeline-list">
                        ${state.activityFeed.map((item) => `
                            <article class="timeline-item">
                                <div class="timeline-icon ${item.level}">
                                    <i class="fa-solid ${item.icon}"></i>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-head">
                                        <h4>${escapeHtml(item.title)}</h4>
                                        <span>${escapeHtml(item.time)}</span>
                                    </div>
                                    <p>${escapeHtml(item.text)}</p>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </section>

                <section class="glass-panel">
                    <div class="panel-header">
                        <div>
                            <h3>المواعيد القادمة</h3>
                            <p>المواعيد المجدولة لباقي اليوم.</p>
                        </div>
                        <button class="btn-outline" onclick="loadView('appointments')">إدارة المواعيد</button>
                    </div>
                    <div class="timeline-list compact">
                        ${state.appointments.map((appointment) => `
                            <article class="timeline-item compact">
                                <div class="time-badge">
                                    <strong>${escapeHtml(appointment.time)}</strong>
                                    <span>${escapeHtml(appointment.period)}</span>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-head">
                                        <h4>${escapeHtml(appointment.patient)}</h4>
                                        ${renderStatus('appointment', appointment.status)}
                                    </div>
                                    <p>${escapeHtml(appointment.dept)} • ${escapeHtml(appointment.doctor)}</p>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </section>
            </div>
        </div>
    `,
    'add-patient': `
        <div class="animated-view">
            ${renderPageHeader(
                'إضافة مريض جديد',
                'أدخل بيانات المريض الأساسية وربطه بالقسم والطبيب المسؤول.',
                `<button class="btn-outline" onclick="loadView('patients-list')">قائمة المرضى</button>`
            )}
            <div class="glass-panel">
                <form id="add-patient-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="p-name">اسم المريض</label>
                            <input type="text" id="p-name" required>
                        </div>
                        <div class="form-group">
                            <label for="p-id">رقم الهوية</label>
                            <input type="text" id="p-id" required>
                        </div>
                        <div class="form-group">
                            <label for="p-dept">القسم</label>
                            <select id="p-dept">
                                ${state.departments.map((dept) => `<option value="${escapeHtml(dept.name)}">${escapeHtml(dept.name)}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="p-doctor">الطبيب المسؤول</label>
                            <select id="p-doctor">
                                ${state.doctors.map((doctor) => `<option value="${escapeHtml(doctor.name)}">${escapeHtml(doctor.name)}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-outline" onclick="loadView('dashboard')">إلغاء</button>
                        <button type="submit" class="btn-primary">حفظ وتسجيل</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    'patients-list': `
        <div class="animated-view">
            ${renderPageHeader(
                'قائمة المرضى',
                'سجل منظم للحالات النشطة مع القسم والطبيب والحالة السريرية.',
                `<button class="btn-primary" onclick="loadView('add-patient')"><i class="fa-solid fa-user-plus"></i> إضافة مريض</button>`
            )}
            <div class="glass-panel">
                <div class="panel-note">${numberFormatter.format(state.patients.length)} حالات مسجلة في العرض الحالي.</div>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>رقم الملف</th>
                                <th>المريض</th>
                                <th>القسم</th>
                                <th>الطبيب</th>
                                <th>الحالة</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.patients.map((patient) => `
                                <tr>
                                    <td>${escapeHtml(patient.id)}</td>
                                    <td>
                                        <div class="table-user">
                                            <img src="${getAvatar(patient.name)}" alt="${escapeHtml(patient.name)}" class="table-avatar">
                                            <div>
                                                <strong class="table-primary">${escapeHtml(patient.name)}</strong>
                                                <span class="table-subtext">غرفة ${escapeHtml(patient.room)}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${escapeHtml(patient.dept)}</td>
                                    <td>${escapeHtml(patient.doctor)}</td>
                                    <td>${renderStatus('patient', patient.status)}</td>
                                    <td><button onclick="deleteItem('patients', '${escapeHtml(patient.id)}')" class="btn-sm"><i class="fa-solid fa-trash"></i></button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'doctors-dir': `
        <div class="animated-view">
            ${renderPageHeader(
                'دليل الأطباء',
                'بطاقات تعريفية سريعة للطاقم الطبي المتاح وحالة التغطية الحالية.',
                `<button class="btn-primary" onclick="loadView('add-doctor')"><i class="fa-solid fa-user-doctor"></i> تسجيل طبيب</button>`
            )}
            <div class="doctor-grid">
                ${state.doctors.map((doctor) => `
                    <article class="doctor-card">
                        <img src="${doctor.img}" alt="${escapeHtml(doctor.name)}" class="doctor-avatar">
                        <div class="doctor-card-body">
                            <div class="doctor-head">
                                <div>
                                    <h3>${escapeHtml(doctor.name)}</h3>
                                    <p>${escapeHtml(doctor.spec)}</p>
                                </div>
                                ${renderStatus('doctor', doctor.status)}
                            </div>
                            <div class="doctor-meta">
                                <span>${escapeHtml(doctor.degree)}</span>
                                <span>${numberFormatter.format(doctor.experience)} سنوات خبرة</span>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `,
    'add-doctor': `
        <div class="animated-view">
            ${renderPageHeader(
                'تسجيل طبيب جديد',
                'إضافة بيانات الطبيب ضمن الفريق الطبي مع التخصص والدرجة العلمية.',
                `<button class="btn-outline" onclick="loadView('doctors-dir')">دليل الأطباء</button>`
            )}
            <div class="glass-panel">
                <form id="add-doctor-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="d-name">الاسم الكامل</label>
                            <input type="text" id="d-name" required>
                        </div>
                        <div class="form-group">
                            <label for="d-spec">التخصص</label>
                            <select id="d-spec">
                                <option value="أمراض القلب">أمراض القلب</option>
                                <option value="طب الأطفال">طب الأطفال</option>
                                <option value="الجراحة العامة">الجراحة العامة</option>
                                <option value="الطوارئ">الطوارئ</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="d-degree">الدرجة العلمية</label>
                            <select id="d-degree">
                                <option value="استشاري">استشاري</option>
                                <option value="أخصائي">أخصائي</option>
                                <option value="نائب">نائب</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-outline" onclick="loadView('doctors-dir')">إلغاء</button>
                        <button type="submit" class="btn-primary">حفظ الطبيب</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    billing: `
        <div class="animated-view">
            ${renderPageHeader(
                'المالية والحسابات',
                'متابعة الفواتير اليومية وحالة التحصيل والدفعات المعتمدة.',
                `<button class="btn-primary" onclick="loadView('add-invoice')"><i class="fa-solid fa-plus"></i> فاتورة جديدة</button>`
            )}
            <div class="stats-grid compact-stats">
                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">إجمالي التحصيل</span>
                        <div class="stat-icon green"><i class="fa-solid fa-coins"></i></div>
                    </div>
                    <div class="stat-details"><h2>${currencyFormatter.format(18750)}</h2></div>
                    <p class="stat-caption">تحصيل الفترة الصباحية حتى الآن.</p>
                </article>
                <article class="stat-card">
                    <div class="stat-head">
                        <span class="stat-label">فواتير قيد المتابعة</span>
                        <div class="stat-icon orange"><i class="fa-solid fa-receipt"></i></div>
                    </div>
                    <div class="stat-details"><h2>${numberFormatter.format(4)}</h2></div>
                    <p class="stat-caption">منها حالتان تنتظران موافقة التأمين.</p>
                </article>
            </div>
            <div class="glass-panel">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>رقم الفاتورة</th>
                                <th>المريض</th>
                                <th>المبلغ</th>
                                <th>طريقة الدفع</th>
                                <th>الحالة</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.billing.map((invoice) => `
                                <tr>
                                    <td>${escapeHtml(invoice.id)}</td>
                                    <td>${escapeHtml(invoice.patient)}</td>
                                    <td>${currencyFormatter.format(invoice.amount)}</td>
                                    <td>${escapeHtml(invoice.method)}</td>
                                    <td>${renderStatus('billing', invoice.status)}</td>
                                    <td><button onclick="printInvoice('${escapeHtml(invoice.id)}')" class="btn-sm"><i class="fa-solid fa-print"></i></button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'add-invoice': `
        <div class="animated-view">
            ${renderPageHeader('إصدار فاتورة', 'إنشاء فاتورة جديدة وربطها بالمريض وقيمة الخدمة.', '')}
            <div class="glass-panel">
                <form id="add-invoice-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="inv-patient">المريض</label>
                            <select id="inv-patient">
                                ${state.patients.map((patient) => `<option value="${escapeHtml(patient.name)}">${escapeHtml(patient.name)}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inv-amount">المبلغ</label>
                            <input type="number" id="inv-amount" required>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-outline" onclick="loadView('billing')">إلغاء</button>
                        <button type="submit" class="btn-primary">حفظ الفاتورة</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    inventory: `
        <div class="animated-view">
            ${renderPageHeader(
                'المخزون والأدوية',
                'متابعة الكميات المتاحة والعناصر القريبة من الحد الأدنى.',
                `<button class="btn-primary" onclick="loadView('add-item')"><i class="fa-solid fa-plus"></i> إضافة صنف</button>`
            )}
            <div class="glass-panel">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>الكود</th>
                                <th>الصنف</th>
                                <th>الفئة</th>
                                <th>الكمية</th>
                                <th>الحد الأدنى</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.inventory.map((item) => `
                                <tr>
                                    <td>${escapeHtml(item.code)}</td>
                                    <td><strong class="table-primary">${escapeHtml(item.name)}</strong></td>
                                    <td>${escapeHtml(item.cat)}</td>
                                    <td>${numberFormatter.format(item.qty)}</td>
                                    <td>${numberFormatter.format(item.min)}</td>
                                    <td>${renderStatus('inventory', item.status)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'add-item': `
        <div class="animated-view">
            ${renderPageHeader('إضافة صنف للمخزون', 'تسجيل مستلزم أو دواء جديد مع كمية البدء.', '')}
            <div class="glass-panel">
                <form id="add-item-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="item-name">اسم الصنف</label>
                            <input type="text" id="item-name" required>
                        </div>
                        <div class="form-group">
                            <label for="item-qty">الكمية</label>
                            <input type="number" id="item-qty" required>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-outline" onclick="loadView('inventory')">إلغاء</button>
                        <button type="submit" class="btn-primary">حفظ الصنف</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    appointments: `
        <div class="animated-view">
            ${renderPageHeader(
                'المواعيد والجدولة',
                'إدارة الزيارات المجدولة ومتابعة التزام المرضى والأقسام.',
                `<button class="btn-primary" onclick="loadView('add-appointment')"><i class="fa-solid fa-calendar-plus"></i> حجز موعد</button>`
            )}
            <div class="glass-panel">
                <div class="panel-header">
                    <div>
                        <h3>جدول مواعيد اليوم</h3>
                        <p>المواعيد مرتبة حسب وقت الحضور وحالة التأكيد.</p>
                    </div>
                </div>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>الوقت</th>
                                <th>المريض</th>
                                <th>القسم</th>
                                <th>الطبيب</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.appointments.map((appointment) => `
                                <tr>
                                    <td><strong class="table-primary">${escapeHtml(appointment.time)} ${escapeHtml(appointment.period)}</strong></td>
                                    <td>${escapeHtml(appointment.patient)}</td>
                                    <td>${escapeHtml(appointment.dept)}</td>
                                    <td>${escapeHtml(appointment.doctor)}</td>
                                    <td>${renderStatus('appointment', appointment.status)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'add-appointment': `
        <div class="animated-view">
            ${renderPageHeader('حجز موعد جديد', 'إضافة موعد جديد وربطه بالقسم المناسب ووقت الزيارة.', '')}
            <div class="glass-panel">
                <form id="add-appointment-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="ap-patient">المريض</label>
                            <input type="text" id="ap-patient" required>
                        </div>
                        <div class="form-group">
                            <label for="ap-dept">القسم</label>
                            <select id="ap-dept">
                                ${state.departments.map((dept) => `<option value="${escapeHtml(dept.name)}">${escapeHtml(dept.name)}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ap-time">الوقت</label>
                            <input type="time" id="ap-time" required>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-outline" onclick="loadView('appointments')">إلغاء</button>
                        <button type="submit" class="btn-primary">تأكيد الحجز</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    departments: `
        <div class="animated-view">
            ${renderPageHeader(
                'الأقسام الطبية',
                'ملخص للسعة، وقت الانتظار، والقيادة السريرية بكل قسم.',
                ''
            )}
            <div class="department-grid">
                ${state.departments.map((dept) => `
                    <article class="department-card">
                        <div class="department-header">
                            <div>
                                <h4>${escapeHtml(dept.name)}</h4>
                                <p>${escapeHtml(dept.lead)}</p>
                            </div>
                            ${renderStatus('priority', dept.priority)}
                        </div>
                        <div class="department-stats">
                            <div>
                                <span>الإشغال</span>
                                <strong>${numberFormatter.format(dept.occupancy)}%</strong>
                            </div>
                            <div>
                                <span>الانتظار</span>
                                <strong>${escapeHtml(dept.wait)}</strong>
                            </div>
                        </div>
                        <div class="progress-track">
                            <span class="progress-fill ${dept.priority}" style="width: ${dept.occupancy}%"></span>
                        </div>
                        <div class="department-footer">
                            <span>${escapeHtml(dept.note)}</span>
                            <strong>${escapeHtml(dept.rooms)}</strong>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `,
    profile: `
        <div class="animated-view">
            ${renderPageHeader('الملف الشخصي', 'بيانات مدير النظام ونطاق المسؤولية التشغيلي.', '')}
            <div class="glass-panel profile-panel">
                <div class="profile-hero">
                    <img src="${getAvatar(state.profile.name)}" alt="${escapeHtml(state.profile.name)}" class="profile-hero-avatar">
                    <div>
                        <span class="hero-badge">
                            <i class="fa-solid fa-user-shield"></i>
                            حساب إداري
                        </span>
                        <h3>${escapeHtml(state.profile.name)}</h3>
                        <p>${escapeHtml(state.profile.role)}</p>
                    </div>
                </div>
                <div class="profile-meta-grid">
                    <div class="meta-card">
                        <span>البريد الإلكتروني</span>
                        <strong>${escapeHtml(state.profile.email)}</strong>
                    </div>
                    <div class="meta-card">
                        <span>رقم الهاتف</span>
                        <strong>${escapeHtml(state.profile.phone)}</strong>
                    </div>
                    <div class="meta-card">
                        <span>القسم</span>
                        <strong>${escapeHtml(state.profile.dept)}</strong>
                    </div>
                    <div class="meta-card">
                        <span>تاريخ الانضمام</span>
                        <strong>${escapeHtml(state.profile.joined)}</strong>
                    </div>
                    <div class="meta-card">
                        <span>الفرع</span>
                        <strong>${escapeHtml(state.profile.branch)}</strong>
                    </div>
                    <div class="meta-card">
                        <span>الوردية الحالية</span>
                        <strong>${escapeHtml(state.profile.shift)}</strong>
                    </div>
                </div>
            </div>
        </div>
    `
});

function loadView(viewName) {
    if (!viewName) return;

    const views = renderViews();
    const container = document.getElementById('view-container');
    if (!container) return;

    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = views[viewName] || `
            <div class="animated-view">
                <div class="glass-panel empty-placeholder">
                    <h3>هذا القسم قيد التطوير</h3>
                    <p>ما زلنا نجهز محتواه بنفس مستوى الواجهة الجديدة.</p>
                    <button class="btn-primary" onclick="loadView('dashboard')">العودة للوحة القيادة</button>
                </div>
            </div>
        `;
        container.style.opacity = '1';

        if (viewName === 'add-patient') initPatientForm();
        if (viewName === 'add-doctor') initDoctorForm();
        if (viewName === 'add-invoice') initInvoiceForm();
        if (viewName === 'add-item') initInventoryForm();
        if (viewName === 'add-appointment') initAppointmentForm();

        document.querySelectorAll('.sidebar .nav-links li').forEach((item) => item.classList.remove('active'));
        const activeNav = document.querySelector(`.sidebar [data-view="${viewName}"]`);
        if (activeNav) {
            const activeItem = activeNav.closest('li');
            if (activeItem) activeItem.classList.add('active');

            const parentMenu = activeNav.closest('.has-submenu');
            if (parentMenu) {
                parentMenu.classList.add('active');
                parentMenu.classList.add('open');
            }
        }

        const searchResults = document.getElementById('search-results');
        if (searchResults) searchResults.style.display = 'none';

        if (window.innerWidth <= 1100) toggleSidebar(false);
    }, 180);
}

function initPatientForm() {
    const form = document.getElementById('add-patient-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = escapeHtml(document.getElementById('p-name').value.trim());
        const dept = escapeHtml(document.getElementById('p-dept').value);
        const doctor = escapeHtml(document.getElementById('p-doctor').value);

        state.patients.unshift({
            id: `#PT-${Math.floor(1000 + Math.random() * 9000)}`,
            name,
            dept,
            doctor,
            date: new Date().toISOString().slice(0, 10),
            status: 'stable',
            room: `OP-${Math.floor(10 + Math.random() * 89)}`
        });

        state.summary.totalPatients += 1;
        if (state.summary.availableBeds > 0) state.summary.availableBeds -= 1;

        showToast(`تم إضافة المريض ${name}`);
        loadView('dashboard');
    }, { once: true });
}

function initDoctorForm() {
    const form = document.getElementById('add-doctor-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = escapeHtml(document.getElementById('d-name').value.trim());
        const spec = escapeHtml(document.getElementById('d-spec').value);
        const degree = escapeHtml(document.getElementById('d-degree').value);

        state.doctors.unshift({
            id: `#DOC-${Math.floor(100 + Math.random() * 900)}`,
            name,
            spec,
            degree,
            experience: 1,
            status: 'available',
            img: 'https://i.pravatar.cc/160?img=22'
        });

        state.summary.doctorsOnDuty += 1;
        showToast(`تم تسجيل ${name}`);
        loadView('doctors-dir');
    }, { once: true });
}

function initInvoiceForm() {
    const form = document.getElementById('add-invoice-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const patient = escapeHtml(document.getElementById('inv-patient').value);
        const amount = Number(document.getElementById('inv-amount').value || 0);

        state.billing.unshift({
            id: `INV-${Math.floor(100 + Math.random() * 900)}`,
            patient,
            amount,
            method: 'بطاقة',
            status: 'paid'
        });

        state.summary.todayRevenue += amount;
        showToast('تم حفظ الفاتورة');
        loadView('billing');
    }, { once: true });
}

function initInventoryForm() {
    const form = document.getElementById('add-item-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = escapeHtml(document.getElementById('item-name').value.trim());
        const qty = Number(document.getElementById('item-qty').value || 0);

        state.inventory.unshift({
            code: `ITM-${Math.floor(100 + Math.random() * 900)}`,
            name,
            cat: 'مستلزمات عامة',
            qty,
            min: 50,
            status: qty > 50 ? 'stable' : 'warning'
        });

        showToast(`تمت إضافة ${name} إلى المخزون`);
        loadView('inventory');
    }, { once: true });
}

function initAppointmentForm() {
    const form = document.getElementById('add-appointment-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const patient = escapeHtml(document.getElementById('ap-patient').value.trim());
        const dept = escapeHtml(document.getElementById('ap-dept').value);
        const time = escapeHtml(document.getElementById('ap-time').value);

        state.appointments.unshift({
            id: Date.now(),
            time,
            period: 'مساءً',
            patient,
            dept,
            doctor: state.doctors[0]?.name || 'د. سارة خالد',
            status: 'confirmed'
        });

        state.summary.todayAppointments += 1;
        showToast(`تم حجز موعد للمريض ${patient}`);
        loadView('appointments');
    }, { once: true });
}

function toggleNotifications() {
    const dropdown = document.getElementById('notif-dropdown');
    if (!dropdown) return;

    dropdown.classList.toggle('active');
    if (!dropdown.classList.contains('active')) return;

    dropdown.innerHTML = `
        <div class="dropdown-header">
            <h4>الإشعارات</h4>
            <span>${numberFormatter.format(state.notifications.length)} جديدة</span>
        </div>
        ${state.notifications.map((notification) => `
            <article class="notif-item">
                <div class="notif-icon ${notification.color}">
                    <i class="fa-solid ${notification.icon}"></i>
                </div>
                <div class="notif-content">
                    <div class="notif-head">
                        <h5>${escapeHtml(notification.title)}</h5>
                        <span>${escapeHtml(notification.time)}</span>
                    </div>
                    <p>${escapeHtml(notification.text)}</p>
                </div>
            </article>
        `).join('')}
    `;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${escapeHtml(message)}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
    }, 2800);
}

function updateClock() {
    const now = new Date();
    const clock = document.getElementById('live-clock');
    const date = document.getElementById('live-date');

    if (clock) clock.innerText = now.toLocaleTimeString('ar-EG');
    if (date) {
        date.innerText = now.toLocaleDateString('ar-EG', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
    }
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;

    const darkMode = document.body.classList.contains('dark-mode');
    icon.className = darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function toggleSidebar(force) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    if (force !== undefined) sidebar.classList.toggle('open', force);
    else sidebar.classList.toggle('open');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('shifacare-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
}

function logout() {
    if (window.confirm('هل تريد تسجيل الخروج من لوحة التحكم؟')) {
        authApi?.clear();
        window.location.replace('login.html');
    }
}

function renderSearchResults(term) {
    const results = document.getElementById('search-results');
    if (!results) return;

    const normalized = term.toLowerCase();
    const matches = [
        ...state.patients
            .filter((patient) => patient.name.toLowerCase().includes(normalized) || patient.dept.toLowerCase().includes(normalized))
            .slice(0, 3)
            .map((patient) => ({
                title: patient.name,
                subtitle: `${patient.dept} • ${patient.doctor}`,
                view: 'patients-list',
                icon: 'fa-user-injured'
            })),
        ...state.doctors
            .filter((doctor) => doctor.name.toLowerCase().includes(normalized) || doctor.spec.toLowerCase().includes(normalized))
            .slice(0, 3)
            .map((doctor) => ({
                title: doctor.name,
                subtitle: `${doctor.spec} • ${getStatusMeta('doctor', doctor.status).label}`,
                view: 'doctors-dir',
                icon: 'fa-user-doctor'
            })),
        ...state.departments
            .filter((dept) => dept.name.toLowerCase().includes(normalized))
            .slice(0, 2)
            .map((dept) => ({
                title: dept.name,
                subtitle: `${dept.wait} • إشغال ${dept.occupancy}%`,
                view: 'departments',
                icon: 'fa-building-circle-check'
            }))
    ].slice(0, 6);

    if (!matches.length) {
        results.innerHTML = `<div class="search-empty">لا توجد نتائج مطابقة.</div>`;
        results.style.display = 'block';
        return;
    }

    results.innerHTML = matches.map((item) => `
        <button type="button" class="search-result-item" data-search-view="${item.view}">
            <span class="search-result-icon"><i class="fa-solid ${item.icon}"></i></span>
            <span class="search-result-text">
                <strong>${escapeHtml(item.title)}</strong>
                <small>${escapeHtml(item.subtitle)}</small>
            </span>
        </button>
    `).join('');
    results.style.display = 'block';
}

window.loadView = loadView;
window.toggleNotifications = toggleNotifications;
window.toggleTheme = toggleTheme;
window.toggleSidebar = toggleSidebar;
window.logout = logout;
window.printInvoice = (id) => showToast(`جاري تجهيز طباعة الفاتورة ${id}`);
window.deleteItem = (collection, identifier) => {
    if (!window.confirm('هل تريد حذف هذا العنصر؟')) return;

    state[collection] = state[collection].filter((item) => (item.id || item.code) !== identifier);
    if (collection === 'patients' && state.summary.totalPatients > 0) state.summary.totalPatients -= 1;

    showToast('تم الحذف بنجاح');
    if (collection === 'patients') loadView('patients-list');
    else if (collection === 'doctors') loadView('doctors-dir');
    else loadView('inventory');
};

document.addEventListener('DOMContentLoaded', () => {
    const authState = requireAuth();
    if (!authState) return;

    syncProfileFromAuth(authState);

    const savedTheme = localStorage.getItem('shifacare-theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');
    updateThemeIcon();

    loadView('dashboard');
    updateClock();
    setInterval(updateClock, 1000);

    const search = document.getElementById('global-search');
    const results = document.getElementById('search-results');

    if (search && results) {
        search.addEventListener('input', (event) => {
            const term = event.target.value.trim();
            if (term.length < 2) {
                results.style.display = 'none';
                return;
            }

            renderSearchResults(term);
        });
    }

    document.addEventListener('click', (event) => {
        const viewLink = event.target.closest('[data-view]');
        if (viewLink) {
            event.preventDefault();
            loadView(viewLink.getAttribute('data-view'));
            return;
        }

        const searchView = event.target.closest('[data-search-view]');
        if (searchView) {
            loadView(searchView.getAttribute('data-search-view'));
            if (search) search.value = '';
            if (results) results.style.display = 'none';
            return;
        }

        const submenuParent = event.target.closest('.has-submenu');
        const navItem = event.target.closest('.nav-item');
        if (submenuParent && navItem && submenuParent.contains(navItem) && !event.target.closest('.sub-menu')) {
            event.preventDefault();
            submenuParent.classList.toggle('open');
        }

        if (!event.target.closest('.notifications')) {
            const dropdown = document.getElementById('notif-dropdown');
            if (dropdown) dropdown.classList.remove('active');
        }

        if (!event.target.closest('.search-bar') && results) {
            results.style.display = 'none';
        }
    });
});
