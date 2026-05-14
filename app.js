/* ── NelSystems — Levantamiento de Requerimientos ────────── */

// ── MoSCoW data ─────────────────────────────────────────────
const MOSCOW_DATA = {
  'moscow-c1': {
    prefix: 'c1',
    rows: [
      { key: 'presenciales',  label: 'Reservas presenciales por administrador' },
      { key: 'online',        label: 'Reservas en línea por usuario final' },
      { key: 'aprobacion',    label: 'Aprobación manual antes de confirmar' },
      { key: 'pago_req',      label: 'Pago obligatorio para confirmar reserva' },
      { key: 'recurrentes',   label: 'Reservas recurrentes (ej. todos los martes)' },
      { key: 'bloqueo_mant',  label: 'Bloqueo automático de horarios para mantenimiento' },
      { key: 'espera',        label: 'Lista de espera automática' },
      { key: 'cancelacion',   label: 'Reglas de cancelación con penalización configurable' },
      { key: 'reembolsos',    label: 'Reembolsos automáticos' },
      { key: 'cal_publico',   label: 'Calendario público visible sin login' },
    ],
  },
  'moscow-c2': {
    prefix: 'c2',
    rows: [
      { key: 'cierre_caja',   label: 'Cierre diario de caja' },
      { key: 'comprobantes',  label: 'Comprobantes / recibos digitales' },
      { key: 'fact_elec',     label: 'Facturación electrónica integrada' },
      { key: 'rep_ingresos',  label: 'Reportes automáticos de ingresos' },
      { key: 'pasarela',      label: 'Cobro automatizado por pasarela' },
      { key: 'conciliacion',  label: 'Conciliación bancaria automática' },
    ],
  },
  'moscow-c5': {
    prefix: 'c5',
    rows: [
      { key: 'inscripcion',   label: 'Inscripción de equipos y jugadores' },
      { key: 'arbitros',      label: 'Gestión de árbitros' },
      { key: 'fixture',       label: 'Generación automática de fixture' },
      { key: 'posiciones',    label: 'Tabla de posiciones automática' },
      { key: 'estadisticas',  label: 'Estadísticas de jugadores' },
      { key: 'resultados',    label: 'Publicación pública de resultados' },
      { key: 'sanciones_dep', label: 'Sanciones deportivas independientes' },
    ],
  },
  'moscow-c6': {
    prefix: 'c6',
    rows: [
      { key: 'bitacora',      label: 'Bitácora de mantenimiento' },
      { key: 'alertas',       label: 'Alertas automáticas por tiempo o uso' },
      { key: 'rep_danos',     label: 'Reporte de daños desde la app del usuario' },
      { key: 'bit_foto',      label: 'Bitácora fotográfica de incidencias' },
      { key: 'orden_trabajo', label: 'Orden de trabajo a personal técnico' },
    ],
  },
};

// ── Dynamic table templates ──────────────────────────────────
const TABLE_TEMPLATES = {
  instalaciones: `
    <tr>
      <td><input type="text" name="inst_nombre[]" placeholder="Ej: Cancha fútbol"></td>
      <td><input type="number" name="inst_cant[]" min="1" value="1" style="width:50px"></td>
      <td><input type="text" name="inst_cap[]" placeholder="Ej: 22 pers."></td>
      <td><input type="text" name="inst_horario[]" placeholder="7am-10pm"></td>
      <td><select name="inst_ilum[]"><option value="si">Sí</option><option value="no">No</option><option value="parcial">Parcial</option></select></td>
      <td><select name="inst_cam[]"><option value="si">Sí</option><option value="no">No</option></select></td>
      <td><select name="inst_grad[]"><option value="si">Sí</option><option value="no">No</option></select></td>
      <td><select name="inst_parqueo[]"><option value="si">Sí</option><option value="no">No</option><option value="limitado">Limitado</option></select></td>
      <td><select name="inst_discap[]"><option value="si">Sí</option><option value="no">No</option><option value="parcial">Parcial</option></select></td>
      <td><input type="text" name="inst_reglas[]" placeholder="Ej: Sin tacos"></td>
      <td><button type="button" class="btn-del-row" title="Eliminar fila">✕</button></td>
    </tr>`,
  tarifas: `
    <tr>
      <td><input type="text" name="tar_inst[]" placeholder="Ej: Cancha fútbol"></td>
      <td><input type="text" name="tar_horario[]" placeholder="Ej: 7am-6pm"></td>
      <td><input type="text" name="tar_usuario[]" placeholder="Ej: Público general"></td>
      <td><select name="tar_ilum[]"><option value="no">Sin ilum.</option><option value="si">Con ilum.</option></select></td>
      <td><input type="number" name="tar_precio[]" min="0" placeholder="0"></td>
      <td><input type="text" name="tar_notas[]" placeholder="Obs..."></td>
      <td><button type="button" class="btn-del-row" title="Eliminar">✕</button></td>
    </tr>`,
  roles: `
    <tr>
      <td><input type="text" name="rol_nombre[]" placeholder="Nombre del rol"></td>
      <td><textarea name="rol_puede[]" rows="2" placeholder="Acciones permitidas..."></textarea></td>
      <td><textarea name="rol_nopuede[]" rows="2" placeholder="Acciones prohibidas..."></textarea></td>
      <td><button type="button" class="btn-del-row">✕</button></td>
    </tr>`,
  sanciones: `
    <tr>
      <td><input type="text" name="san_tipo[]" placeholder="Tipo de sanción"></td>
      <td><input type="text" name="san_aplica[]" placeholder="Aplica a..."></td>
      <td><input type="text" name="san_consecuencia[]" placeholder="Consecuencia..."></td>
      <td><input type="text" name="san_duracion[]" placeholder="Duración"></td>
      <td><button type="button" class="btn-del-row">✕</button></td>
    </tr>`,
  reportes: `
    <tr>
      <td><input type="text" name="rep_nombre[]" placeholder="Ej: Ingresos por cancha"></td>
      <td><select name="rep_frecuencia[]"><option value="diario">Diario</option><option value="semanal">Semanal</option><option value="mensual" selected>Mensual</option><option value="trimestral">Trimestral</option><option value="anual">Anual</option><option value="demanda">A demanda</option></select></td>
      <td><input type="text" name="rep_destinatario[]" placeholder="Destinatario"></td>
      <td><select name="rep_formato[]"><option value="pdf">PDF</option><option value="excel">Excel</option><option value="pantalla">Pantalla</option></select></td>
      <td><button type="button" class="btn-del-row">✕</button></td>
    </tr>`,
};

// ── State ────────────────────────────────────────────────────
const STEPS = ['step-a', 'step-b', 'step-c', 'step-d', 'step-close'];
const STORAGE_KEY = 'nelsystems_levantamiento_v1';
let currentStep = 0;
let saveTimer = null;

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMoscowTables();
  setupSectionToggles();
  setupConditionalFields();
  setupDynamicTables();
  setupNavigation();
  loadFromStorage();
  setupAutoSave();
  setupStepDots();
  updateUI();
});

// ── Render MoSCoW tables ─────────────────────────────────────
function renderMoscowTables() {
  Object.entries(MOSCOW_DATA).forEach(([containerId, config]) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = config.rows.map(row => `
      <div class="moscow-row">
        <span class="moscow-row__label">${row.label}</span>
        <div class="moscow-row__bottom">
          <div class="moscow-pills">
            ${['M', 'S', 'C', 'W'].map(v => `
              <div class="moscow-pill-opt" data-v="${v}">
                <input type="radio" name="${config.prefix}_${row.key}" id="${config.prefix}_${row.key}_${v}" value="${v}">
                <label for="${config.prefix}_${row.key}_${v}" title="${moscowTitle(v)}">${v}</label>
              </div>
            `).join('')}
          </div>
          <input type="text" class="moscow-notes" name="${config.prefix}_${row.key}_notas" placeholder="Notas opcionales…">
        </div>
      </div>`).join('');
  });
}

function moscowTitle(v) {
  return { M: 'Must have — Obligatorio', S: 'Should have — Deseable', C: 'Could have — Opcional', W: "Won't have — Fuera de alcance" }[v];
}

// ── Section block toggles ────────────────────────────────────
function setupSectionToggles() {
  document.querySelectorAll('.section-block__header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.section-block').classList.toggle('is-collapsed');
    });
  });
}

// ── Conditional fields ───────────────────────────────────────
function setupConditionalFields() {
  const figuraSelect = document.getElementById('a1_figura');
  const otraWrap = document.getElementById('a1_figura_otra_wrap');
  if (figuraSelect && otraWrap) {
    figuraSelect.addEventListener('change', () => {
      otraWrap.hidden = figuraSelect.value !== 'otra';
    });
  }
}

// ── Dynamic tables ───────────────────────────────────────────
function setupDynamicTables() {
  document.querySelectorAll('.btn-add-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const tableId = btn.dataset.table;
      const tbody = document.getElementById(`tbody-${tableId}`);
      if (!tbody || !TABLE_TEMPLATES[tableId]) return;
      const temp = document.createElement('tbody');
      temp.innerHTML = TABLE_TEMPLATES[tableId].trim();
      const newRow = temp.firstChild;
      tbody.appendChild(newRow);
      attachDelRowListeners(newRow);
      debouncedSave();
    });
  });

  // Wire up existing del buttons
  document.querySelectorAll('.btn-del-row').forEach(btn => attachDelRowListeners(btn.closest('tr')));
}

function attachDelRowListeners(row) {
  if (!row) return;
  const btn = row.querySelector('.btn-del-row');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const tbody = row.closest('tbody');
    if (tbody && tbody.rows.length > 1) {
      row.remove();
      debouncedSave();
    } else {
      btn.style.opacity = '.3';
      setTimeout(() => (btn.style.opacity = ''), 600);
    }
  });
}

// ── Wizard navigation ────────────────────────────────────────
function setupNavigation() {
  document.getElementById('btn-prev').addEventListener('click', () => goTo(currentStep - 1));
  document.getElementById('btn-next').addEventListener('click', () => goTo(currentStep + 1));
  document.getElementById('btn-submit').addEventListener('click', generatePDF);
}

function setupStepDots() {
  document.querySelectorAll('.wz-step-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.dataset.step);
      goTo(target);
    });
  });
}

function goTo(index) {
  if (index < 0 || index >= STEPS.length) return;

  // Deactivate current
  document.getElementById(STEPS[currentStep]).classList.remove('is-active');
  document.querySelectorAll('.wz-step-dot')[currentStep].classList.remove('is-active');

  currentStep = index;

  // Activate new
  document.getElementById(STEPS[currentStep]).classList.add('is-active');

  // Scroll to top of main
  document.querySelector('.wz-main').scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  updateUI();
  debouncedSave();
}

function updateUI() {
  const total = STEPS.length;
  const pct = Math.round(((currentStep + 1) / total) * 100);

  document.getElementById('step-current').textContent = currentStep + 1;
  document.getElementById('step-total').textContent = total;
  document.getElementById('progress-fill').style.width = pct + '%';

  // Buttons
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSubmit = document.getElementById('btn-submit');

  btnPrev.disabled = currentStep === 0;
  const isLast = currentStep === total - 1;
  btnNext.hidden = isLast;
  btnSubmit.hidden = !isLast;

  // Step dots
  document.querySelectorAll('.wz-step-dot').forEach((dot, i) => {
    dot.classList.remove('is-active', 'is-done');
    if (i === currentStep) dot.classList.add('is-active');
    if (i < currentStep) dot.classList.add('is-done');
    dot.querySelector('.wz-step-dot__circle').textContent =
      i < currentStep ? '✓' : ['A', 'B', 'C', 'D', '✓'][i];
  });
}

// ── Auto-save ────────────────────────────────────────────────
function setupAutoSave() {
  document.addEventListener('input', debouncedSave);
  document.addEventListener('change', debouncedSave);
}

function debouncedSave() {
  clearTimeout(saveTimer);
  setSaveStatus('saving');
  saveTimer = setTimeout(() => {
    saveToStorage();
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  }, 600);
}

function setSaveStatus(state) {
  const el = document.getElementById('save-status');
  el.className = 'save-status';
  if (state === 'saving') { el.classList.add('is-saving'); el.textContent = '⟳ Guardando…'; }
  else if (state === 'saved') { el.classList.add('is-saved'); el.textContent = '✓ Guardado'; }
  else { el.textContent = 'Auto-guardado activado'; }
}

// ── Storage ──────────────────────────────────────────────────
function collectFormData() {
  const data = { _step: currentStep, _ts: Date.now() };
  const form = document.getElementById('app');

  // Text, number, date, textarea, select
  form.querySelectorAll('input[id], textarea[id], select[id]').forEach(el => {
    if (el.type === 'radio' || el.type === 'checkbox') return;
    data[el.id] = el.value;
  });

  // Named radios
  const radioNames = new Set();
  form.querySelectorAll('input[type="radio"]').forEach(el => radioNames.add(el.name));
  radioNames.forEach(name => {
    const checked = form.querySelector(`input[type="radio"][name="${name}"]:checked`);
    data[`radio_${name}`] = checked ? checked.value : '';
  });

  // Named checkboxes (grouped by name)
  const cbNames = new Set();
  form.querySelectorAll('input[type="checkbox"]').forEach(el => cbNames.add(el.name));
  cbNames.forEach(name => {
    const checked = [...form.querySelectorAll(`input[type="checkbox"][name="${name}"]:checked`)].map(c => c.value);
    data[`cb_${name}`] = checked;
  });

  // Range inputs (unnamed but with id)
  form.querySelectorAll('input[type="range"][id]').forEach(el => {
    data[el.id] = el.value;
  });

  // Dynamic table data (serialize as array of row objects)
  ['instalaciones', 'tarifas', 'roles', 'sanciones', 'reportes'].forEach(tName => {
    const tbody = document.getElementById(`tbody-${tName}`);
    if (!tbody) return;
    const rows = [];
    tbody.querySelectorAll('tr').forEach(row => {
      const rowData = {};
      row.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.name) rowData[el.name.replace('[]', '')] = el.value;
      });
      rows.push(rowData);
    });
    data[`table_${tName}`] = rows;
  });

  // MoSCoW selections
  Object.entries(MOSCOW_DATA).forEach(([, config]) => {
    config.rows.forEach(row => {
      const checked = form.querySelector(`input[name="${config.prefix}_${row.key}"]:checked`);
      data[`moscow_${config.prefix}_${row.key}`] = checked ? checked.value : '';
      const notes = form.querySelector(`input[name="${config.prefix}_${row.key}_notas"]`);
      data[`moscow_${config.prefix}_${row.key}_notas`] = notes ? notes.value : '';
    });
  });

  // Notification matrix checkboxes
  form.querySelectorAll('.notif-table input[type="checkbox"]').forEach(el => {
    data[`notif_${el.name}`] = el.checked;
  });

  return data;
}

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectFormData()));
  } catch (e) {
    console.warn('localStorage save failed:', e);
  }
}

function loadFromStorage() {
  let data;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    data = JSON.parse(raw);
  } catch { return; }

  const form = document.getElementById('app');

  // Text/textarea/select/number/date inputs
  form.querySelectorAll('input[id], textarea[id], select[id]').forEach(el => {
    if (el.type === 'radio' || el.type === 'checkbox') return;
    if (data[el.id] !== undefined) el.value = data[el.id];
  });

  // Radios
  Object.keys(data).filter(k => k.startsWith('radio_')).forEach(k => {
    const name = k.replace('radio_', '');
    const val = data[k];
    if (!val) return;
    const radio = form.querySelector(`input[type="radio"][name="${name}"][value="${val}"]`);
    if (radio) radio.checked = true;
  });

  // Checkboxes
  Object.keys(data).filter(k => k.startsWith('cb_')).forEach(k => {
    const name = k.replace('cb_', '');
    const vals = data[k] || [];
    form.querySelectorAll(`input[type="checkbox"][name="${name}"]`).forEach(cb => {
      cb.checked = vals.includes(cb.value);
    });
  });

  // Ranges
  form.querySelectorAll('input[type="range"][id]').forEach(el => {
    if (data[el.id] !== undefined) {
      el.value = data[el.id];
      el.dispatchEvent(new Event('input'));
    }
  });

  // Dynamic tables
  ['instalaciones', 'tarifas', 'roles', 'sanciones', 'reportes'].forEach(tName => {
    const savedRows = data[`table_${tName}`];
    if (!savedRows || !savedRows.length) return;
    const tbody = document.getElementById(`tbody-${tName}`);
    if (!tbody) return;
    tbody.innerHTML = '';
    savedRows.forEach(rowData => {
      const temp = document.createElement('tbody');
      temp.innerHTML = TABLE_TEMPLATES[tName]
        ? TABLE_TEMPLATES[tName].trim()
        : '';
      // For default roles table we rebuild
      if (!TABLE_TEMPLATES[tName]) return;
      const newRow = temp.firstChild;
      newRow.querySelectorAll('input, select, textarea').forEach(el => {
        const k = el.name ? el.name.replace('[]', '') : null;
        if (k && rowData[k] !== undefined) el.value = rowData[k];
      });
      tbody.appendChild(newRow);
      attachDelRowListeners(newRow);
    });
  });

  // Restore roles table (has pre-filled rows)
  const rolesSaved = data['table_roles'];
  if (rolesSaved && rolesSaved.length) {
    const tbody = document.getElementById('tbody-roles');
    if (tbody) {
      const existingRows = tbody.querySelectorAll('tr');
      existingRows.forEach((row, i) => {
        if (rolesSaved[i]) {
          row.querySelectorAll('input, textarea').forEach(el => {
            const k = el.name ? el.name.replace('[]', '') : null;
            if (k && rolesSaved[i][k] !== undefined) el.value = rolesSaved[i][k];
          });
        }
      });
    }
  }

  // MoSCoW
  Object.entries(MOSCOW_DATA).forEach(([, config]) => {
    config.rows.forEach(row => {
      const val = data[`moscow_${config.prefix}_${row.key}`];
      if (val) {
        const radio = form.querySelector(`input[name="${config.prefix}_${row.key}"][value="${val}"]`);
        if (radio) radio.checked = true;
      }
      const notesVal = data[`moscow_${config.prefix}_${row.key}_notas`];
      if (notesVal !== undefined) {
        const notesInput = form.querySelector(`input[name="${config.prefix}_${row.key}_notas"]`);
        if (notesInput) notesInput.value = notesVal;
      }
    });
  });

  // Notification matrix
  Object.keys(data).filter(k => k.startsWith('notif_')).forEach(k => {
    const name = k.replace('notif_', '');
    const cb = form.querySelector(`.notif-table input[name="${name}"]`);
    if (cb) cb.checked = !!data[k];
  });

  // Conditional fields
  const figuraSelect = document.getElementById('a1_figura');
  if (figuraSelect) figuraSelect.dispatchEvent(new Event('change'));

  // Restore step
  if (data._step !== undefined && data._step >= 0 && data._step < STEPS.length) {
    goTo(data._step);
  }
}

// ── PDF Generation ───────────────────────────────────────────
async function generatePDF() {
  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.textContent = '⟳ Generando PDF…';

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    const PW = 210, PH = 297, M = 15, CW = PW - M * 2;

    const PRIMARY = [29, 78, 216];
    const TEXT = [15, 23, 42];
    const GRAY = [100, 116, 139];
    const LIGHTBLUE = [239, 246, 255];
    const BORDER = [203, 213, 225];

    let y = M;

    const checkPage = (needed = 10) => {
      if (y + needed > PH - M) { doc.addPage(); y = M; }
    };

    const heading = (text, level = 1) => {
      checkPage(14);
      if (level === 1) {
        doc.setFillColor(...PRIMARY);
        doc.rect(M, y, CW, 10, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(text, M + 4, y + 7);
        y += 13;
      } else if (level === 2) {
        doc.setDrawColor(...BORDER);
        doc.setFillColor(...LIGHTBLUE);
        doc.rect(M, y, CW, 8, 'FD');
        doc.setTextColor(...PRIMARY);
        doc.setFontSize(9.5);
        doc.setFont('helvetica', 'bold');
        doc.text(text, M + 3, y + 5.5);
        y += 11;
      }
      doc.setTextColor(...TEXT);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
    };

    const field = (label, value) => {
      if (!value || !value.toString().trim()) return;
      const lines = doc.splitTextToSize(`${value}`, CW - 30);
      checkPage(7 + lines.length * 5);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...GRAY);
      doc.text(label + ':', M, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...TEXT);
      doc.text(lines, M + 32, y);
      y += 5 + (lines.length - 1) * 5;
    };

    const spacer = (h = 4) => { y += h; };

    const get = id => (document.getElementById(id) || {}).value || '';
    const getRadio = name => { const el = document.querySelector(`input[name="${name}"]:checked`); return el ? el.value : '—'; };
    const getCbs = name => [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(c => c.value).join(', ') || '—';

    // ── COVER PAGE ──
    doc.setFillColor(...PRIMARY);
    doc.rect(0, 0, PW, 60, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('NelSystems', M, 25);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text('Levantamiento de Requerimientos', M, 35);
    doc.setFontSize(10);
    doc.text('Sistema de Gestión de Instalaciones Deportivas', M, 43);

    doc.setTextColor(...TEXT);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    y = 72;
    const orgName = get('a1_nombre') || 'Organización sin nombre';
    doc.text(`Organización: ${orgName}`, M, y); y += 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`Fecha de generación: ${new Date().toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' })}`, M, y); y += 7;
    doc.text(`Representante legal: ${get('a1_representante') || '—'}`, M, y); y += 7;
    doc.text(`Cédula jurídica: ${get('a1_cedula') || '—'}`, M, y); y += 7;

    doc.setDrawColor(...BORDER);
    doc.line(M, y + 4, PW - M, y + 4);
    y += 12;

    doc.setFontSize(8.5);
    doc.setTextColor(...GRAY);
    doc.text('Documento confidencial — Generado automáticamente por NelSystems', M, y);

    // ── BLOCK A ──
    doc.addPage(); y = M;
    heading('BLOQUE A — Contexto y Estrategia');

    heading('A1. Identificación de la organización', 2);
    field('Nombre oficial', get('a1_nombre'));
    field('Figura legal', get('a1_figura') === 'otra' ? get('a1_figura_otra') : get('a1_figura'));
    field('Cédula jurídica', get('a1_cedula'));
    field('Representante legal', get('a1_representante'));
    field('Año de fundación', get('a1_anio'));
    field('Personas administrativas', get('a1_num_personas'));
    field('Historia operativa', get('a1_historia'));
    field('Roles del personal', get('a1_roles'));
    spacer();

    heading('A2. Objetivos estratégicos', 2);
    field('Problema central', get('a2_problema'));
    field('Objetivo 1', get('a2_obj1'));
    field('Objetivo 2', get('a2_obj2'));
    field('Objetivo 3', get('a2_obj3'));
    field('Indicador 1', get('a2_ind1'));
    field('Indicador 2', get('a2_ind2'));
    field('Indicador 3', get('a2_ind3'));
    field('Costo de no hacer nada', get('a2_costo_no_hacer'));
    spacer();

    heading('A3. Stakeholders y gestión del cambio', 2);
    field('Apoyan el proyecto', get('a3_apoyan'));
    field('Posible resistencia', get('a3_resistencia'));
    field('Plan de capacitación', get('a3_capacitacion'));
    field('Decisiones que requieren aprobación', get('a3_aprobaciones'));

    // ── BLOCK B ──
    doc.addPage(); y = M;
    heading('BLOQUE B — Operación Actual');

    heading('B1. Volumen y dimensionamiento', 2);
    field('Reservas/semana (normal)', get('b1_reservas_semana'));
    field('Reservas en temporada alta', get('b1_reservas_alta'));
    field('Usuarios distintos por mes', get('b1_usuarios_mes'));
    field('Horas y días pico', get('b1_horas_pico'));
    field('Horas y días bajos', get('b1_horas_bajas'));
    field('Ingreso mensual alquileres (₡)', get('b1_ingreso_alquileres'));
    field('Ingreso por torneos/eventos (₡)', get('b1_ingreso_eventos'));
    field('% cancelaciones', (document.getElementById('b1_cancelaciones') || {}).value + '%');
    field('Nivel de morosidad', get('b1_morosidad'));
    spacer();

    heading('B2. Inventario de instalaciones', 2);
    const instRows = [];
    document.querySelectorAll('#tbody-instalaciones tr').forEach(row => {
      const cells = row.querySelectorAll('input, select');
      const r = [...cells].map(c => c.value || '—');
      if (r[0] && r[0] !== '—') instRows.push(r.slice(0, 10));
    });
    if (instRows.length) {
      checkPage(30);
      doc.autoTable({
        startY: y,
        head: [['Instalación', 'Cant', 'Cap.', 'Horario', 'Ilum', 'Cam', 'Gra', 'Parq', 'Disc', 'Reglas']],
        body: instRows,
        theme: 'grid',
        headStyles: { fillColor: PRIMARY, fontSize: 7, cellPadding: 2 },
        bodyStyles: { fontSize: 7, cellPadding: 2 },
        margin: { left: M, right: M },
      });
      y = doc.lastAutoTable.finalY + 5;
    }
    field('Instalaciones compartidas', get('b2_compartidas'));

    heading('B3. Procesos actuales', 2);
    field('Proceso de reserva', get('b3_reserva'));
    field('Mañana del administrador', get('b3_maniana'));
    field('Cobros y cierre de caja', get('b3_cobros'));
    field('Manejo de conflictos', get('b3_conflictos'));
    field('Mantenimiento e incidencias', get('b3_mantenimiento'));

    heading('B4. Herramientas actuales', 2);
    field('Herramientas', get('b4_herramientas'));
    field('Duplicación de información', get('b4_duplicacion'));
    field('Información que se pierde', get('b4_perdida'));

    heading('B5. Dolores y oportunidades', 2);
    ['p1','p2','p3','p4','p5'].forEach((k,i) => field(`Problema #${i+1}`, get(`b5_${k}`)));
    field('Errores que no deben repetirse', get('b5_errores'));
    field('Tareas de bajo valor', get('b5_tareas'));
    field('Quejas frecuentes', get('b5_quejas'));

    // ── BLOCK C ──
    doc.addPage(); y = M;
    heading('BLOQUE C — Funcionalidades Deseadas (MoSCoW)');

    // C1 MoSCoW
    heading('C1. Gestión de reservas', 2);
    const c1Rows = MOSCOW_DATA['moscow-c1'].rows.map(row => {
      const checked = document.querySelector(`input[name="c1_${row.key}"]:checked`);
      const notes = document.querySelector(`input[name="c1_${row.key}_notas"]`);
      return [row.label, checked ? checked.value : '—', notes ? notes.value : ''];
    });
    checkPage(40);
    doc.autoTable({
      startY: y,
      head: [['Funcionalidad', 'MoSCoW', 'Notas']],
      body: c1Rows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY, fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 1: { halign: 'center', cellWidth: 20 }, 2: { cellWidth: 50 } },
      margin: { left: M, right: M },
    });
    y = doc.lastAutoTable.finalY + 4;
    field('Tiempo mín/máx por reserva', `${get('c1_tiempo_min')} / ${get('c1_tiempo_max')}`);
    field('Antelación máx/mín', `${get('c1_antelacion_max')} / ${get('c1_antelacion_min')}`);
    field('Tipos de usuario', get('c1_tipos_usuario'));

    // C2
    heading('C2. Tarifas y cobros', 2);
    const tarRows = [];
    document.querySelectorAll('#tbody-tarifas tr').forEach(row => {
      const inputs = row.querySelectorAll('input, select');
      const r = [...inputs].map(c => c.value || '—');
      if (r[0] !== '—') tarRows.push(r.slice(0, 6));
    });
    if (tarRows.length) {
      checkPage(30);
      doc.autoTable({
        startY: y,
        head: [['Instalación', 'Horario', 'Usuario', 'Iluminación', 'Precio (₡)', 'Notas']],
        body: tarRows,
        theme: 'grid',
        headStyles: { fillColor: PRIMARY, fontSize: 7.5 },
        bodyStyles: { fontSize: 7.5 },
        margin: { left: M, right: M },
      });
      y = doc.lastAutoTable.finalY + 4;
    }
    field('Métodos de pago', getCbs('c2_pago'));
    field('Facturación electrónica', getRadio('c2_facturacion'));

    const c2Rows = MOSCOW_DATA['moscow-c2'].rows.map(row => {
      const checked = document.querySelector(`input[name="c2_${row.key}"]:checked`);
      const notes = document.querySelector(`input[name="c2_${row.key}_notas"]`);
      return [row.label, checked ? checked.value : '—', notes ? notes.value : ''];
    });
    checkPage(30);
    doc.autoTable({
      startY: y,
      head: [['Funcionalidad de cobro', 'MoSCoW', 'Notas']],
      body: c2Rows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY, fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 1: { halign: 'center', cellWidth: 20 } },
      margin: { left: M, right: M },
    });
    y = doc.lastAutoTable.finalY + 4;

    // C3
    heading('C3. Usuarios, roles y permisos', 2);
    const rolesRows = [];
    document.querySelectorAll('#tbody-roles tr').forEach(row => {
      const inputs = row.querySelectorAll('input, textarea');
      rolesRows.push([...[...inputs].slice(0, 3)].map(c => c.value || '—'));
    });
    if (rolesRows.length) {
      checkPage(30);
      doc.autoTable({
        startY: y,
        head: [['Rol', 'Puede hacer', 'NO puede hacer']],
        body: rolesRows,
        theme: 'grid',
        headStyles: { fillColor: PRIMARY, fontSize: 8 },
        bodyStyles: { fontSize: 7.5 },
        margin: { left: M, right: M },
      });
      y = doc.lastAutoTable.finalY + 4;
    }
    field('Autenticación', getCbs('c3_auth'));
    field('Auditoría', getRadio('c3_auditoria'));
    field('Tiempo retención auditoría', get('c3_tiempo_auditoria'));

    // C4
    heading('C4. Reglamento y disciplina', 2);
    field('Reglamento oficial', getRadio('c4_reglamento'));
    field('Aceptación digital', getRadio('c4_aceptacion'));
    field('Bloqueo automático', getRadio('c4_bloqueo'));
    field('Reglas de bloqueo', get('c4_reglas_bloqueo'));

    // C5
    heading('C5. Torneos y competencias', 2);
    field('¿Organizan torneos?', getRadio('c5_torneos'));
    field('Torneos por año', get('c5_num_torneos'));
    field('Disciplinas', get('c5_disciplinas'));
    const c5Rows = MOSCOW_DATA['moscow-c5'].rows.map(row => {
      const checked = document.querySelector(`input[name="c5_${row.key}"]:checked`);
      const notes = document.querySelector(`input[name="c5_${row.key}_notas"]`);
      return [row.label, checked ? checked.value : '—', notes ? notes.value : ''];
    });
    checkPage(30);
    doc.autoTable({
      startY: y,
      head: [['Funcionalidad de torneos', 'MoSCoW', 'Notas']],
      body: c5Rows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY, fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 1: { halign: 'center', cellWidth: 20 } },
      margin: { left: M, right: M },
    });
    y = doc.lastAutoTable.finalY + 4;

    // C6
    heading('C6. Mantenimiento', 2);
    field('Tipos de mantenimiento', getCbs('c6_tipos_mant'));
    const c6Rows = MOSCOW_DATA['moscow-c6'].rows.map(row => {
      const checked = document.querySelector(`input[name="c6_${row.key}"]:checked`);
      const notes = document.querySelector(`input[name="c6_${row.key}_notas"]`);
      return [row.label, checked ? checked.value : '—', notes ? notes.value : ''];
    });
    checkPage(25);
    doc.autoTable({
      startY: y,
      head: [['Funcionalidad de mantenimiento', 'MoSCoW', 'Notas']],
      body: c6Rows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY, fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 1: { halign: 'center', cellWidth: 20 } },
      margin: { left: M, right: M },
    });
    y = doc.lastAutoTable.finalY + 4;

    // C7 Notifications
    heading('C7. Notificaciones y comunicación', 2);
    field('Canales', getCbs('c7_canales'));
    field('Costo mensual aceptable', get('c7_costo') ? `₡${get('c7_costo')}` : '—');
    const events = ['conf', 'rec', 'can', 'pago', 'san', 'cam', 'mant'];
    const eventLabels = ['Confirmación de reserva', 'Recordatorio previo', 'Cancelación', 'Pago pendiente', 'Sanción aplicada', 'Cambio de horario', 'Mantenimiento programado'];
    const channels = ['correo', 'wa', 'sms', 'push', 'ninguno'];
    const notifRows = events.map((ev, i) => {
      const chs = channels.filter(ch => {
        const cb = document.querySelector(`.notif-table input[name="notif_${ev}_${ch}"]`);
        return cb && cb.checked;
      }).join(', ') || '—';
      return [eventLabels[i], chs];
    });
    checkPage(35);
    doc.autoTable({
      startY: y,
      head: [['Evento', 'Canales seleccionados']],
      body: notifRows,
      theme: 'grid',
      headStyles: { fillColor: PRIMARY, fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      margin: { left: M, right: M },
    });
    y = doc.lastAutoTable.finalY + 4;

    // C8
    heading('C8. Reportes y analítica', 2);
    const repRows = [];
    document.querySelectorAll('#tbody-reportes tr').forEach(row => {
      const cells = row.querySelectorAll('input, select');
      const r = [...cells].map(c => c.value || '—');
      if (r[0] !== '—') repRows.push(r.slice(0, 4));
    });
    if (repRows.length) {
      checkPage(25);
      doc.autoTable({
        startY: y,
        head: [['Reporte', 'Frecuencia', 'Destinatario', 'Formato']],
        body: repRows,
        theme: 'grid',
        headStyles: { fillColor: PRIMARY, fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        margin: { left: M, right: M },
      });
      y = doc.lastAutoTable.finalY + 4;
    }
    field('Métricas del dashboard', get('c8_dashboard'));
    field('Reportes públicos', get('c8_publicos'));

    // ── BLOCK D ──
    doc.addPage(); y = M;
    heading('BLOQUE D — Restricciones Técnicas y de Proyecto');

    heading('D1. Plataforma y acceso', 2);
    field('Plataforma prioritaria', getRadio('d1_plataforma'));
    field('Justificación', get('d1_justificacion'));
    field('% acceso móvil', (document.getElementById('d1_pct_movil') || {}).value + '%');
    field('Accesibilidad Ley 7600', getRadio('d1_accesibilidad'));
    field('Idiomas', getCbs('d1_idiomas'));

    heading('D2. Integraciones', 2);
    field('Redes sociales', get('d2_redes'));
    field('Sitio web actual', get('d2_web'));
    field('Correo institucional', get('d2_correo'));

    heading('D3. Seguridad y cumplimiento', 2);
    field('Datos de menores', getRadio('d3_menores'));
    field('Registrado ante PRODHAB', getRadio('d3_prodhab'));
    field('Respaldos automáticos', getRadio('d3_respaldos'));
    field('Frecuencia de respaldo', get('d3_frecuencia_resp'));
    field('Almacenamiento respaldos', get('d3_almacenamiento'));
    field('Auditorías', get('d3_auditorias'));
    field('Retención de datos', get('d3_retencion'));

    heading('D4. Infraestructura y soporte', 2);
    field('Dominio / hosting / cloud', get('d4_dominio'));
    field('Personal técnico', getRadio('d4_personal_tecnico'));
    field('Administrador del sistema', get('d4_administrador'));
    field('Horario de soporte', get('d4_soporte'));

    heading('D5. Restricciones del proyecto', 2);
    field('Presupuesto desarrollo', get('d5_presupuesto_dev'));
    field('Presupuesto operación/mes (₡)', get('d5_presupuesto_op'));
    field('Fecha objetivo', get('d5_fecha'));
    field('Fecha forzada / restricción', get('d5_fecha_forzada'));
    field('MVP #1', get('d5_mvp1'));
    field('MVP #2', get('d5_mvp2'));
    field('MVP #3', get('d5_mvp3'));

    heading('D6. Visión a futuro', 2);
    field('Nuevas instalaciones o sedes', getRadio('d6_nuevas_sedes'));
    field('Plan de expansión', get('d6_sedes_plan'));
    field('Licenciar a otras asociaciones', getRadio('d6_licencia'));
    field('Monetización del sistema', getRadio('d6_monetizacion'));
    field('Cómo visualizan monetización', get('d6_monetizacion_como'));

    // ── CLOSING ──
    heading('CIERRE DE LA SESIÓN', 2);
    field('Temas adicionales', get('cl_tema'));
    field('Documentos a compartir', get('cl_documentos'));
    field('Quiénes deben validar', get('cl_validacion'));

    // ── Footer on all pages ──
    const pages = doc.internal.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      doc.setPage(p);
      doc.setFontSize(7);
      doc.setTextColor(...GRAY);
      doc.text(`NelSystems — Levantamiento de Requerimientos`, M, PH - 8);
      doc.text(`Página ${p} de ${pages}`, PW - M, PH - 8, { align: 'right' });
      doc.setDrawColor(...BORDER);
      doc.line(M, PH - 11, PW - M, PH - 11);
    }

    const orgSlug = (get('a1_nombre') || 'levantamiento').toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    const dateStr = new Date().toISOString().split('T')[0];
    doc.save(`nelsystems_${orgSlug}_${dateStr}.pdf`);

  } catch (err) {
    console.error('PDF error:', err);
    alert('Error al generar el PDF. Verifique que todos los scripts están cargados correctamente.');
  } finally {
    btn.disabled = false;
    btn.textContent = '↓ Generar PDF';
  }
}
