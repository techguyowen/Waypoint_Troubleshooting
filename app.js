// ==========================================================================
// Sound Booth & A/V Volunteer Troubleshooting & Operations Hub - App Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    activeTab: 'volunteer-hub',
    activeScenarioId: 'sanctuary-tvs',
    scenarioStepIndex: 0,
    scenarioResolved: false,
    activeAudioSub: 'sub-stage',
    activeStageBoxId: 'front-left',
    activeConsoleLayer: 'A',
    selectedFader: null,
    searchQuery: '',
    checkedListItems: JSON.parse(localStorage.getItem('av_checklist_state') || '{}'),
    searchQuery: '',
    checkedListItems: JSON.parse(localStorage.getItem('av_checklist_state') || '{}')
  };

  // DOM Elements
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  // Volunteer Problem Cards
  const quickProblemCards = document.querySelectorAll('.quick-problem-card');
  const wizardCanvas = document.getElementById('wizardCanvas');

  // Audio Sub-Nav Elements
  const audioSubButtons = document.querySelectorAll('#audioSubNavGroup .layer-btn');
  const audioSubPanes = document.querySelectorAll('.audio-subpane');

  // Stage Map Elements
  const stageBoxZones = document.getElementById('stageBoxZones');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorLocation = document.getElementById('inspectorLocation');
  const inspectorContent = document.getElementById('inspectorContent');

  // Console Elements
  const layerButtons = document.querySelectorAll('#layerSwitchGroup .layer-btn');
  const currentLayerLabel = document.getElementById('currentLayerLabel');
  const faderStripsGrid = document.getElementById('faderStripsGrid');

  // Mix Bus Table Element
  const mixBusTableBody = document.getElementById('mixBusTableBody');

  // Application Settings Cache
  const appSettings = JSON.parse(localStorage.getItem('av_app_settings') || JSON.stringify(AV_DATA.defaultAppSettings || { publicBaseUrl: '', voxstreamDeviceIp: '192.168.1.150' }));

  // Patch Calc Elements
  const guestInstrumentName = document.getElementById('guestInstrumentName');
  const guestStagePort = document.getElementById('guestStagePort');
  const guestAviomTarget = document.getElementById('guestAviomTarget');
  const guestOutputBox = document.getElementById('guestOutputBox');
  const btnClickFront = document.getElementById('btnClickFront');
  const btnClickDrums = document.getElementById('btnClickDrums');
  const clickOutputBox = document.getElementById('clickOutputBox');

  // Checklist Elements
  const checklistGrid = document.getElementById('checklistGrid');
  const chkProgressFill = document.getElementById('chkProgressFill');
  const chkProgressText = document.getElementById('chkProgressText');
  const btnResetChecklist = document.getElementById('btnResetChecklist');

  // Modal Elements
  const channelDetailModal = document.getElementById('channelDetailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFaderNum = document.getElementById('modalFaderNum');
  const modalScribble = document.getElementById('modalScribble');
  const modalBodyContent = document.getElementById('modalBodyContent');

  // Guest QR Card Elements
  const qrWifi = document.getElementById('qrWifi');
  const qrAppStore = document.getElementById('qrAppStore');
  const qrGooglePlay = document.getElementById('qrGooglePlay');
  const guestQrModal = document.getElementById('guestQrModal');
  const modalQrCloseBtn = document.getElementById('modalQrCloseBtn');
  const modalQrBody = document.getElementById('modalQrBody');

  // Captions Display QR Elements
  const qrCaptionsDisplay = document.getElementById('qrCaptionsDisplay');
  const captionsDisplayUrlText = document.getElementById('captionsDisplayUrlText');
  const btnCopyDisplayUrl = document.getElementById('btnCopyDisplayUrl');
  const btnTestDisplayUrl = document.getElementById('btnTestDisplayUrl');
  const inputBoothDeviceIp = document.getElementById('inputBoothDeviceIp');
  const btnSaveBoothDeviceIp = document.getElementById('btnSaveBoothDeviceIp');
  const btnDetectBoothDeviceIp = document.getElementById('btnDetectBoothDeviceIp');
  const ipSaveFeedback = document.getElementById('ipSaveFeedback');
  const btnOpenCaptionsQrModal = document.getElementById('btnOpenCaptionsQrModal');
  const btnShareCaptionsModalInline = document.getElementById('btnShareCaptionsModalInline');
  const btnOpenCaptionsQrModalFromCard = document.getElementById('btnOpenCaptionsQrModalFromCard');
  const captionsQrModal = document.getElementById('captionsQrModal');
  const modalCaptionsQrCloseBtn = document.getElementById('modalCaptionsQrCloseBtn');
  const modalCaptionsQrCode = document.getElementById('modalCaptionsQrCode');
  const modalCaptionsUrlText = document.getElementById('modalCaptionsUrlText');
  const inputModalDeviceIp = document.getElementById('inputModalDeviceIp');
  const btnModalSaveDeviceIp = document.getElementById('btnModalSaveDeviceIp');
  const btnModalDetectDeviceIp = document.getElementById('btnModalDetectDeviceIp');
  const btnModalCopyDisplayUrl = document.getElementById('btnModalCopyDisplayUrl');
  const btnModalOpenDisplayUrl = document.getElementById('btnModalOpenDisplayUrl');

  // Report Form Elements
  const btnCopyFormUrl = document.getElementById('btnCopyFormUrl');

  // SOS Emergency & Quick Search Containers
  const sosEmergencyBar = document.getElementById('sosEmergencyBar');
  const popularSearchChips = document.getElementById('popularSearchChips');

  // --------------------------------------------------------------------------
  // 1. URL Hash Routing & Navigation State
  // --------------------------------------------------------------------------
  let isInternalNavigation = false;

  function updateUrlHash(hashPath) {
    if (isInternalNavigation) return;
    const cleanPath = (hashPath || '').replace(/^#\/?/, '');
    if (window.location.hash.replace(/^#\/?/, '') === cleanPath) return;
    try {
      history.replaceState(null, '', `#/${cleanPath}`);
    } catch (e) {
      window.location.hash = `/${cleanPath}`;
    }
  }

  function handleHashChange() {
    isInternalNavigation = true;
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    if (!rawHash) {
      isInternalNavigation = false;
      return;
    }

    const parts = rawHash.split('/');
    const mainAction = parts[0];

    // 1. Permanent Short QR Slugs (/#q/{slug})
    if (mainAction === 'q' && parts[1]) {
      const slug = parts[1].toLowerCase();
      const mappedRoute = (AV_DATA.permanentSlugMap && AV_DATA.permanentSlugMap[slug]) || slug;
      const targetParts = mappedRoute.split('/');
      if (targetParts[0] === 'scenario' && targetParts[1]) {
        switchTab('volunteer-hub', false);
        selectScenario(targetParts[1], false);
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (targetParts[0] === 'tab' && targetParts[1]) {
        switchTab(targetParts[1], false);
        if (targetParts[2]) {
          if (targetParts[1] === 'audio-hub') switchAudioSub(targetParts[2], false);
          else if (targetParts[1] === 'livestream-hub') switchLivestreamSub(targetParts[2], false);
          else if (targetParts[1] === 'embrace-hub') switchEmbraceSub(targetParts[2], false);
        }
      }
    } else if (mainAction === 'scenario' && parts[1]) {
      const scenId = parts[1];
      const exists = AV_DATA.troubleshootingScenarios.some(s => s.id === scenId);
      if (exists) {
        switchTab('volunteer-hub', false);
        selectScenario(scenId, false);
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (mainAction === 'tab' && parts[1]) {
      const tabId = parts[1];
      const subId = parts[2];
      switchTab(tabId, false);
      if (subId) {
        if (tabId === 'audio-hub') switchAudioSub(subId, false);
        else if (tabId === 'livestream-hub') switchLivestreamSub(subId, false);
        else if (tabId === 'embrace-hub') switchEmbraceSub(subId, false);
      }
    } else {
      // Shortcut direct hash (e.g. #sanctuary-tvs or #checklist or #tvs)
      const mappedSlug = AV_DATA.permanentSlugMap && AV_DATA.permanentSlugMap[mainAction];
      if (mappedSlug) {
        const targetParts = mappedSlug.split('/');
        if (targetParts[0] === 'scenario' && targetParts[1]) {
          switchTab('volunteer-hub', false);
          selectScenario(targetParts[1], false);
          const el = document.getElementById('wizardCanvas');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (targetParts[0] === 'tab' && targetParts[1]) {
          switchTab(targetParts[1], false);
        }
      } else {
        const isScenario = AV_DATA.troubleshootingScenarios.some(s => s.id === mainAction);
        if (isScenario) {
          switchTab('volunteer-hub', false);
          selectScenario(mainAction, false);
          const el = document.getElementById('wizardCanvas');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          const isTab = Array.from(tabButtons).some(b => b.dataset.tab === mainAction);
          if (isTab) {
            switchTab(mainAction, false);
          }
        }
      }
    }
    isInternalNavigation = false;
  }

  window.addEventListener('hashchange', handleHashChange);

  // --------------------------------------------------------------------------
  // 1b. Navigation Tabs Management
  // --------------------------------------------------------------------------
  function switchTab(tabId, syncHash = true) {
    state.activeTab = tabId;
    tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    tabPanes.forEach(pane => pane.classList.toggle('active', pane.id === `pane-${tabId}`));
    if (syncHash && !isInternalNavigation) {
      updateUrlHash(`tab/${tabId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Embrace Sub-Navigation (Inside Embrace Hub)
  const embraceSubButtons = document.querySelectorAll('#embraceSubNavGroup .layer-btn');
  const embraceSubPanes = document.querySelectorAll('.embrace-subpane');

  function switchEmbraceSub(subId, syncHash = true) {
    embraceSubButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.embracesub === subId);
    });
    embraceSubPanes.forEach(pane => {
      pane.style.display = pane.id === `embracesub-${subId.replace('sub-', '')}` ? 'block' : 'none';
    });
    if (syncHash && !isInternalNavigation) {
      updateUrlHash(`tab/embrace-hub/${subId}`);
    }
  }

  embraceSubButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchEmbraceSub(btn.dataset.embracesub);
    });
  });

  // Livestream Sub-Navigation (Inside Livestream & Slides Hub)
  const livestreamSubButtons = document.querySelectorAll('#livestreamSubNavGroup .layer-btn');
  const livestreamSubPanes = document.querySelectorAll('.livestream-subpane');

  function switchLivestreamSub(subId, syncHash = true) {
    livestreamSubButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.livesub === subId);
    });
    livestreamSubPanes.forEach(pane => {
      pane.style.display = pane.id === `livesub-${subId.replace('sub-', '')}` ? 'block' : 'none';
    });
    if (syncHash && !isInternalNavigation) {
      updateUrlHash(`tab/livestream-hub/${subId}`);
    }
  }

  livestreamSubButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLivestreamSub(btn.dataset.livesub);
    });
  });

  // Direct Scenario launcher cards
  document.querySelectorAll('[data-directscenario]').forEach(card => {
    card.addEventListener('click', () => {
      const scenId = card.dataset.directscenario;
      switchTab('volunteer-hub');
      selectScenario(scenId);
      if (wizardCanvas) {
        wizardCanvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Audio Sub-Navigation (Inside Sound Engineer Hub)
  function switchAudioSub(subId, syncHash = true) {
    state.activeAudioSub = subId;
    audioSubButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.audiosub === subId);
    });
    audioSubPanes.forEach(pane => {
      pane.style.display = pane.id === `audiosub-${subId.replace('sub-', '')}` ? 'block' : 'none';
    });
    if (syncHash && !isInternalNavigation) {
      updateUrlHash(`tab/audio-hub/${subId}`);
    }
  }

  audioSubButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchAudioSub(btn.dataset.audiosub);
    });
  });

  // --------------------------------------------------------------------------
  // 1c. 1-Tap SOS Emergency Bar & Popular Suggestion Chips
  // --------------------------------------------------------------------------
  function renderSosBar() {
    if (!sosEmergencyBar || !AV_DATA.sosQuickFixes) return;

    if (AV_DATA.sosQuickFixes.length === 0) {
      sosEmergencyBar.style.display = 'none';
      return;
    }

    sosEmergencyBar.style.display = 'flex';
    sosEmergencyBar.innerHTML = `
      <div class="sos-bar-header">
        <span class="sos-pulse-dot"></span>
        <span class="sos-bar-title">Urgent SOS Triggers</span>
      </div>
      <div class="sos-items-container">
        ${AV_DATA.sosQuickFixes.map(fix => `
          <button class="sos-action-btn" data-sos-scenario="${fix.id}" title="${fix.subtitle}">
            <span>${fix.icon}</span>
            <span><strong>${fix.title}</strong></span>
            <span class="sos-badge">${fix.badge}</span>
          </button>
        `).join('')}
      </div>
    `;

    sosEmergencyBar.querySelectorAll('.sos-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const scenId = btn.dataset.sosScenario;
        switchTab('volunteer-hub');
        selectScenario(scenId);
        if (wizardCanvas) {
          wizardCanvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function renderPopularChips() {
    if (!popularSearchChips || !AV_DATA.popularSearchChips) return;
    popularSearchChips.innerHTML = `
      <span class="popular-chips-label">Popular:</span>
      ${AV_DATA.popularSearchChips.map(chip => `
        <button class="popular-search-chip" data-query="${chip.query}" data-type="${chip.type || 'search'}">
          ${chip.label}
        </button>
      `).join('')}
    `;

    popularSearchChips.querySelectorAll('.popular-search-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query;
        const type = btn.dataset.type;
        if (type === 'scenario') {
          switchTab('volunteer-hub');
          selectScenario(query);
          if (wizardCanvas) {
            wizardCanvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          if (globalSearchInput) {
            globalSearchInput.value = query;
            handleSearchInput(query);
            globalSearchInput.focus();
          }
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Diagnostic Wizard Engine (Volunteer Hub)
  // --------------------------------------------------------------------------
  function selectScenario(scenarioId, syncHash = true) {
    state.activeScenarioId = scenarioId;
    state.scenarioStepIndex = 0;
    state.scenarioResolved = false;

    quickProblemCards.forEach(card => {
      card.classList.toggle('active', card.dataset.scenario === scenarioId);
    });

    if (syncHash && !isInternalNavigation) {
      updateUrlHash(`scenario/${scenarioId}`);
    }

    renderWizard();
  }

  // Filter Chips for Quick-Fix Problems
  const filterChips = document.querySelectorAll('#problemFilterBar .filter-chip');
  if (filterChips.length > 0) {
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        if (!filter) return;
        filterChips.forEach(c => {
          if (c.dataset.filter) c.classList.toggle('active', c === chip);
        });
        quickProblemCards.forEach(card => {
          const cardCats = (card.dataset.category || '').split(/\s+/);
          if (filter === 'all' || cardCats.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  quickProblemCards.forEach(card => {
    card.addEventListener('click', () => {
      selectScenario(card.dataset.scenario);
      if (wizardCanvas) {
        wizardCanvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  function renderWizard() {
    if (!wizardCanvas) return;
    const scenario = AV_DATA.troubleshootingScenarios.find(s => s.id === state.activeScenarioId);
    if (!scenario) return;

    // Update active highlight on card
    quickProblemCards.forEach(card => {
      card.classList.toggle('active', card.dataset.scenario === scenario.id);
    });

    const totalSteps = scenario.phases.length;
    const currentStep = scenario.phases[state.scenarioStepIndex];

    if (state.scenarioResolved) {
      wizardCanvas.innerHTML = `
        <div class="resolution-success-card">
          <div class="success-icon">🎉</div>
          <h3 class="success-title">Problem Resolved!</h3>
          <p class="success-desc">Great job! The system is working properly. You're ready for service.</p>
          <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <button id="btnRestartWizard" class="btn-prev-step">Start Over</button>
            <button id="btnOtherScenario" class="btn-resolved">Solve Another Issue</button>
          </div>
        </div>
      `;

      document.getElementById('btnRestartWizard').addEventListener('click', () => {
        state.scenarioStepIndex = 0;
        state.scenarioResolved = false;
        renderWizard();
      });

      document.getElementById('btnOtherScenario').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    // Generate step dots
    let dotsHtml = '';
    for (let i = 0; i < totalSteps; i++) {
      let dotClass = 'dot-step';
      if (i < state.scenarioStepIndex) dotClass += ' completed';
      else if (i === state.scenarioStepIndex) dotClass += ' active';
      dotsHtml += `<div class="${dotClass}" title="Phase ${i+1}"></div>`;
    }

    // Guest instructions if present (e.g. Wavecast)
    let guestBoxHtml = '';
    if (scenario.guestInstructions) {
      guestBoxHtml = `
        <div class="step-tip-box" style="margin-bottom: 1rem; background: rgba(59, 130, 246, 0.1); border-left-color: var(--accent-blue); color: hsl(210, 80%, 85%);">
          <strong style="color: var(--accent-blue);">Guest Instructions:</strong><br>
          ${scenario.guestInstructions.map(inst => `<div>${inst}</div>`).join('')}
        </div>
      `;
    }

    // Actions list
    const actionItemsHtml = currentStep.actionSteps.map((action, idx) => `
      <li class="step-action-item">
        <span class="step-action-number">${idx + 1}</span>
        <span>${action}</span>
      </li>
    `).join('');

    const tipHtml = currentStep.tip ? `
      <div class="step-tip-box">
        <strong>💡 Pro Tip:</strong> ${currentStep.tip}
      </div>
    ` : '';

    let warningBannerHtml = '';
    if (scenario.id === 'load-show-file') {
      warningBannerHtml = `
        <div class="step-tip-box" style="margin-bottom: 1.25rem; background: rgba(239, 68, 68, 0.15); border-left: 4px solid #ef4444; color: #fca5a5; padding: 0.9rem 1.1rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 800; color: #f87171; text-transform: uppercase; letter-spacing: 0.04em;">
            <span>🛑</span> CRITICAL SAFETY RULE: DO NOT OVERWRITE '1NormalSunday'
          </div>
          <p style="font-size: 0.85rem; color: #fecaca; margin-top: 0.35rem; line-height: 1.45;">
            <strong>1NormalSunday</strong> is the church's master golden baseline template with all default gain structures, Aviom sends, and routing. You may <strong>LOAD</strong> this show file at any time, but <strong>NEVER OVERWRITE / SAVE OVER</strong> it with custom service changes. Always save any new custom mixes under a separate dated name.
          </p>
        </div>
      `;
    }

    // Generate all phases HTML for high-contrast multi-phase printout
    const allPhasesPrintHtml = scenario.phases.map((p, idx) => `
      <div class="wizard-print-phase-block">
        <div class="wizard-print-phase-header">
          <span class="wizard-print-phase-num">Phase ${idx + 1}: ${p.title}</span>
          <span class="location-pill" style="font-size: 0.72rem;">📍 ${p.location}</span>
        </div>
        <ol class="step-actions-list" style="margin: 0.4rem 0;">
          ${p.actionSteps.map((act, sIdx) => `
            <li class="step-action-item">
              <span class="step-action-number">${sIdx + 1}</span>
              <div>${act}</div>
            </li>
          `).join('')}
        </ol>
        ${p.tip ? `<div class="step-tip-box" style="margin-top: 0.4rem; font-size: 0.78rem;"><strong>💡 Pro Tip:</strong> ${p.tip}</div>` : ''}
      </div>
    `).join('');

    wizardCanvas.innerHTML = `
      <div class="wizard-title-bar">
        <div>
          <h3 class="wizard-main-title">${scenario.title}</h3>
        </div>
        <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;">
          <div class="wizard-progress-track">
            ${totalSteps > 1 
              ? `<span>Phase ${state.scenarioStepIndex + 1} of ${totalSteps}</span><div class="progress-steps-dots">${dotsHtml}</div>`
              : `<span style="background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">⚡ Quick-Fix Guide</span>`
            }
          </div>
          <button class="btn-print-action" id="btnPrintScenario" title="Print this complete troubleshooting guide">
            <span>🖨️</span> Print Guide
          </button>
        </div>
      </div>

      ${warningBannerHtml}
      ${guestBoxHtml}

      <div class="step-card">
        <div class="step-card-header">
          <div>
            <span class="step-phase-badge">${currentStep.phase}</span>
            <h4 class="step-heading">${currentStep.title}</h4>
          </div>
          <span class="location-pill">📍 ${currentStep.location}</span>
        </div>

        <ul class="step-actions-list">
          ${actionItemsHtml}
        </ul>

        ${tipHtml}
      </div>

      <div class="wizard-decision-box">
        <span class="decision-prompt">${totalSteps === 1 ? 'Did this resolve the issue?' : 'Did this step fix the problem?'}</span>
        <div class="decision-buttons">
          ${state.scenarioStepIndex > 0 ? '<button id="btnPrevStep" class="btn-prev-step">← Previous Phase</button>' : ''}
          <button id="btnYesResolved" class="btn-resolved">✓ Yes, It Worked!</button>
          ${state.scenarioStepIndex < totalSteps - 1 ? '<button id="btnNoNext" class="btn-next-step">No, Next Phase →</button>' : ''}
        </div>
      </div>

      <!-- Hidden on screen, formatted for 1-click clean printing -->
      <div class="wizard-print-all-phases">
        <div class="wizard-print-doc-header">
          <h4>Waypoint Church &bull; Sound Booth Operations Guide</h4>
          <h2>${scenario.title}</h2>
          <p>${scenario.summary}</p>
        </div>
        ${warningBannerHtml}
        ${guestBoxHtml}
        ${allPhasesPrintHtml}
      </div>
    `;

    const btnPrintScenario = document.getElementById('btnPrintScenario');
    if (btnPrintScenario) {
      btnPrintScenario.addEventListener('click', () => window.print());
    }

    document.getElementById('btnYesResolved').addEventListener('click', () => {
      state.scenarioResolved = true;
      renderWizard();
    });

    if (state.scenarioStepIndex > 0) {
      document.getElementById('btnPrevStep').addEventListener('click', () => {
        state.scenarioStepIndex--;
        renderWizard();
      });
    }

    if (state.scenarioStepIndex < totalSteps - 1) {
      document.getElementById('btnNoNext').addEventListener('click', () => {
        state.scenarioStepIndex++;
        renderWizard();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 2b. Dynamic Embrace Group Hub Renderer
  // --------------------------------------------------------------------------
  function renderEmbraceHub() {
    const dynamicCardsGrid = document.getElementById('embraceDynamicCardsGrid');
    const embraceAllGuidesList = document.getElementById('embraceAllGuidesList');
    const embraceCountBadge = document.getElementById('embraceCountBadge');

    // Dynamically filter all scenarios assigned to Embrace group
    const embraceScenarios = (AV_DATA.troubleshootingScenarios || []).filter(s => 
      s.isEmbrace === true || 
      (s.category && s.category.toLowerCase().includes('embrace')) ||
      (s.group && s.group.toLowerCase() === 'embrace')
    );

    if (embraceCountBadge) {
      embraceCountBadge.textContent = embraceScenarios.length;
    }

    if (dynamicCardsGrid) {
      dynamicCardsGrid.innerHTML = embraceScenarios.map(s => {
        let icon = '🤝';
        if (s.icon === 'tv') icon = '📺';
        else if (s.icon === 'captions') icon = '💬';
        else if (s.icon === 'hearing') icon = '🎧';
        else if (s.icon === 'clock') icon = '⏱️';

        return `
          <div class="quick-problem-card" style="cursor: pointer;" data-embracescenario="${s.id}">
            <div class="problem-card-icon" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa;">${icon}</div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">${s.title}</h3>
              <p class="problem-card-desc">${s.summary}</p>
              <span class="problem-card-action">Open Guide & Instructions ➔</span>
            </div>
          </div>
        `;
      }).join('');

      dynamicCardsGrid.querySelectorAll('.quick-problem-card').forEach(card => {
        card.addEventListener('click', () => {
          const scId = card.dataset.embracescenario;
          if (scId === 'williams-av-wavecast') {
            switchEmbraceSub('sub-wavecast');
          } else if (scId === 'embrace-obs') {
            switchEmbraceSub('sub-embracetv');
          } else if (scId === 'obs-captions' || scId === 'embrace-captions-view') {
            switchEmbraceSub('sub-captions');
          } else {
            // For any newly added dynamic Embrace scenarios:
            switchEmbraceSub('sub-all-embrace');
            const targetEl = document.getElementById(`embrace-guide-${scId}`);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    if (embraceAllGuidesList) {
      embraceAllGuidesList.innerHTML = embraceScenarios.map(s => {
        let phasesHtml = '';
        if (s.phases && s.phases.length > 0) {
          phasesHtml = s.phases.map(p => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-top: 0.75rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; flex-wrap: wrap; gap: 0.25rem;">
                <h5 style="color: var(--accent-blue); font-size: 0.9rem; font-weight: 700; margin: 0;">${p.phase}: ${p.title}</h5>
                <span class="location-pill" style="font-size: 0.7rem;">${p.badge || 'Step ' + p.stepNumber}</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">📍 ${p.location}</p>
              <ol class="step-actions-list" style="margin: 0.25rem 0;">
                ${p.actionSteps.map((step, idx) => `
                  <li class="step-action-item">
                    <span class="step-action-number">${idx + 1}</span>
                    <div>${step}</div>
                  </li>
                `).join('')}
              </ol>
              ${p.tip ? `<div class="step-tip-box" style="margin-top: 0.5rem; font-size: 0.78rem;">💡 ${p.tip}</div>` : ''}
            </div>
          `).join('');
        }

        return `
          <div class="calc-card" id="embrace-guide-${s.id}">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0;">
                ${s.title}
              </h4>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span class="bus-pill" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa;">${s.category}</span>
                <button class="btn-print-action" onclick="window.print()" title="Print this guide">
                  <span>🖨️</span> Print
                </button>
              </div>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 0 0.5rem 0;">${s.summary}</p>
            ${phasesHtml}
          </div>
        `;
      }).join('');
    }
  }

  // --------------------------------------------------------------------------
  // 3. Interactive Stage Map & Inspector (Sound Engineer Hub)
  // --------------------------------------------------------------------------
  function renderStageMap() {
    if (!stageBoxZones) return;
    stageBoxZones.innerHTML = '';

    AV_DATA.stageBoxes.forEach(box => {
      const card = document.createElement('div');
      card.className = `stage-box-card ${box.id === state.activeStageBoxId ? 'active' : ''}`;
      card.style.gridArea = box.id === 'drum-cage-left' || box.id === 'drum-cage-right' ? 'drum-cage' : box.id;
      
      const inputsCount = box.inputs.length;
      const aviomCount = box.networkPorts ? box.networkPorts.length : 0;

      card.innerHTML = `
        <div class="box-title-row">
          <span class="box-name">${box.name}</span>
          <span class="box-color-marker" style="background-color: ${box.color};"></span>
        </div>
        <div class="box-inputs-preview">
          <span class="input-pill">${inputsCount} Inputs</span>
          ${aviomCount > 0 ? `<span class="input-pill" style="border-color: rgba(59, 130, 246, 0.4); color: var(--accent-blue);">${aviomCount} Aviom</span>` : ''}
          ${box.badge ? `<span class="input-pill" style="border-color: rgba(20, 184, 166, 0.4); color: var(--accent-teal);">${box.badge}</span>` : ''}
        </div>
      `;

      card.addEventListener('click', () => {
        state.activeStageBoxId = box.id;
        renderStageMap();
        renderStageInspector(box);
      });

      stageBoxZones.appendChild(card);
    });

    const activeBox = AV_DATA.stageBoxes.find(b => b.id === state.activeStageBoxId);
    if (activeBox) {
      renderStageInspector(activeBox);
    }
  }

  function renderStageInspector(box) {
    if (!inspectorTitle || !inspectorLocation || !inspectorContent) return;
    inspectorTitle.textContent = box.name;
    inspectorLocation.textContent = box.location;

    let html = '';

    if (box.description) {
      html += `
        <div class="step-tip-box" style="margin-bottom: 0.85rem; background: rgba(20, 184, 166, 0.1); border-left-color: var(--accent-teal); color: hsl(175, 70%, 85%);">
          ${box.description}
        </div>
      `;
    }

    // Inputs Table
    html += `
      <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 0.4rem;">
        Audio Inputs & Tie-Lines
      </h4>
      <table class="ports-table" style="margin-bottom: 1rem;">
        <thead>
          <tr>
            <th style="width: 50px;">Port</th>
            <th>Label / Instrument</th>
            <th>Console Patch</th>
          </tr>
        </thead>
        <tbody>
    `;

    box.inputs.forEach(inp => {
      const colorDot = inp.colorHex ? `<span class="snake-color-dot" style="background: ${inp.colorHex};"></span>` : '';
      const faderTag = inp.faderLayer ? `<span style="color: var(--accent-emerald); font-weight: 600;">[Layer ${inp.faderLayer} / Fader ${inp.faderNum}]</span>` : '';

      html += `
        <tr>
          <td><span class="port-num-badge">In ${inp.boxInput}</span></td>
          <td>
            ${colorDot}<strong>${inp.label}</strong>
            ${inp.cableColor ? `<div style="font-size: 0.72rem; color: var(--text-muted);">${inp.cableColor}</div>` : ''}
            ${inp.notes ? `<div style="font-size: 0.72rem; color: var(--text-secondary);">${inp.notes}</div>` : ''}
          </td>
          <td>
            <div style="font-size: 0.8rem;">${inp.destination}</div>
            ${faderTag}
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;

    // Aviom Ports if any
    if (box.networkPorts && box.networkPorts.length > 0) {
      html += `
        <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.4rem;">
          Aviom In-Ear Network Ports
        </h4>
        <table class="ports-table">
          <thead>
            <tr>
              <th style="width: 90px;">Aviom Port</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
      `;

      box.networkPorts.forEach(port => {
        html += `
          <tr>
            <td><span class="port-num-badge" style="color: var(--accent-blue);">${port.port}</span></td>
            <td>${port.type}</td>
            <td style="font-size: 0.75rem; color: var(--text-secondary);">${port.notes}</td>
          </tr>
        `;
      });

      html += `</tbody></table>`;
    }

    inspectorContent.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // 4. Virtual Console (Soundcraft Si Impact)
  // --------------------------------------------------------------------------
  function renderConsoleLayer(layerKey) {
    state.activeConsoleLayer = layerKey;
    layerButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.layer === layerKey);
    });

    const layerData = AV_DATA.consoleLayers[layerKey];
    if (!layerData || !faderStripsGrid) return;

    currentLayerLabel.textContent = `${layerData.name}`;
    faderStripsGrid.innerHTML = '';

    layerData.faders.forEach(f => {
      const isSelected = state.selectedFader && state.selectedFader.layer === layerKey && state.selectedFader.fader === f.fader;
      const strip = document.createElement('div');
      strip.className = `fader-strip ${isSelected ? 'selected' : ''}`;
      
      let borderColor = 'rgba(0, 255, 255, 0.2)';
      if (f.category === 'vocal') borderColor = 'rgba(59, 130, 246, 0.5)';
      if (f.category === 'instrument') borderColor = 'rgba(16, 185, 129, 0.5)';
      if (f.category === 'drum') borderColor = 'rgba(239, 68, 68, 0.5)';
      if (f.category === 'vca') borderColor = 'rgba(245, 158, 11, 0.5)';
      if (f.category === 'mixbus') borderColor = 'rgba(168, 85, 247, 0.5)';

      strip.innerHTML = `
        <div class="fader-num">${f.fader}</div>
        <button class="strip-sel-btn">SEL</button>
        <div class="scribble-strip" style="border-color: ${borderColor};">
          <div class="scribble-text">${f.scribble}</div>
        </div>
        <div class="fader-track-container">
          <div class="fader-center-slot"></div>
          <div class="fader-knob">
            <div class="fader-knob-line"></div>
          </div>
        </div>
        <div class="fader-source-subtext" title="${f.source}">
          ${f.source}
        </div>
      `;

      strip.addEventListener('click', () => {
        state.selectedFader = { layer: layerKey, ...f };
        renderConsoleLayer(layerKey);
        openFaderDetailModal(f, layerKey);
      });

      faderStripsGrid.appendChild(strip);
    });
  }

  layerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderConsoleLayer(btn.dataset.layer);
    });
  });

  function openFaderDetailModal(faderItem, layerKey) {
    if (!channelDetailModal || !modalFaderNum || !modalScribble || !modalBodyContent) return;

    modalFaderNum.textContent = `Layer ${layerKey} • Fader ${faderItem.fader}`;
    modalScribble.textContent = `${faderItem.scribble} (${faderItem.source})`;

    const isClick = faderItem.scribble === 'Click';
    const isAmbient = faderItem.scribble === 'Ambient';

    let destText = faderItem.mixBus || faderItem.destination || 'Mix 12 (Stereo House) ➔ Master LR';
    let houseStatusText = '<span style="color: var(--accent-emerald);">Active on Mix 12 (Stereo House)</span>';

    if (isClick) {
      destText = '<strong style="color: var(--accent-emerald);">Aviom In-Ear Monitors ONLY</strong>';
      houseStatusText = '<strong style="color: #f87171;">❌ NEVER TO HOUSE (Mix 12 / Master LR)</strong>';
    } else if (isAmbient) {
      destText = '<strong style="color: var(--accent-blue);">Mix 14 (Live Stream Broadcast) ONLY</strong>';
      houseStatusText = '<strong style="color: #f87171;">❌ NEVER TO HOUSE (Mix 12 / Master LR)</strong>';
    }

    let quickStep4 = 'Press <strong>MIX 12</strong> (Stereo House) and verify fader is raised to nominal.';
    if (isClick) {
      quickStep4 = 'Press individual <strong>Aviom Mixes</strong> (Mix 1-5, 9-11) to send click to musicians. <em>DO NOT raise on Mix 12 (House).</em>';
    } else if (isAmbient) {
      quickStep4 = 'Press <strong>MIX 14</strong> (Live Stream) to send room ambience to broadcast. <em>DO NOT route to Mix 12 (House).</em>';
    }

    modalBodyContent.innerHTML = `
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <div class="modal-info-label">Physical Input / Patch</div>
          <div class="modal-info-value">${faderItem.patch || 'Internal / VCA / Bus'}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Category</div>
          <div class="modal-info-value" style="text-transform: capitalize;">${faderItem.category || 'General'}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">House / Sanctuary Routing</div>
          <div class="modal-info-value">${houseStatusText}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Primary Destination</div>
          <div class="modal-info-value">${destText}</div>
        </div>
      </div>

      ${(isClick || isAmbient) ? `
        <div class="step-tip-box" style="background: rgba(239, 68, 68, 0.1); border-left-color: var(--accent-rose); color: #fca5a5;">
          <strong>⚠️ Strict Church Audio Rule:</strong> ${isClick ? 'Click Track is sent <strong>ONLY to Aviom In-Ear Monitors</strong>. It must NEVER be sent to the House speakers (Mix 12 / Master LR) so the congregation does not hear it.' : 'Ambient room mic is sent <strong>ONLY to the Live Stream (Mix 14)</strong> for online broadcast atmosphere. It must NEVER be sent to House speakers (Mix 12 / Master LR) to prevent feedback/echo.'}
        </div>
      ` : ''}

      ${faderItem.note ? `
        <div class="step-tip-box" style="background: rgba(245, 158, 11, 0.1); border-left-color: var(--accent-amber); color: #fbbf24;">
          <strong>Console Tape Note:</strong> ${faderItem.note}
        </div>
      ` : ''}

      <div style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.85rem;">
        <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; text-transform: uppercase;">
          Quick Channel Troubleshooting
        </h4>
        <ol style="margin-left: 1.15rem; font-size: 0.8rem; color: var(--text-primary); display: flex; flex-direction: column; gap: 0.25rem;">
          <li>Press illuminated <strong>SEL</strong> button above Fader ${faderItem.fader}.</li>
          <li>On Touchscreen, tap <strong>Inputs</strong> ➔ Verify patched to corresponding box input.</li>
          <li>Check Preamp Gain knob & 48V phantom power (if condenser/active DI).</li>
          <li>${quickStep4}</li>
        </ol>
      </div>
    `;

    channelDetailModal.classList.add('open');
  }

  modalCloseBtn.addEventListener('click', () => {
    channelDetailModal.classList.remove('open');
  });

  channelDetailModal.addEventListener('click', (e) => {
    if (e.target === channelDetailModal) {
      channelDetailModal.classList.remove('open');
    }
  });

  // --------------------------------------------------------------------------
  // 5. Mix Bus Routing Table
  // --------------------------------------------------------------------------
  function renderMixBuses() {
    if (!mixBusTableBody) return;
    mixBusTableBody.innerHTML = '';

    AV_DATA.mixBuses.forEach(b => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="bus-pill">Mix ${b.busNumber}</span></td>
        <td><strong>${b.tapeLabel}</strong></td>
        <td><span style="font-size: 0.8rem; color: var(--text-secondary);">${b.function}</span></td>
        <td><span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-blue);">${b.destination}</span></td>
        <td>${b.description}</td>
      `;
      mixBusTableBody.appendChild(tr);
    });
  }

  // --------------------------------------------------------------------------
  // 6. Guest Instrument & Click Calculators
  // --------------------------------------------------------------------------
  function updateGuestCalculator() {
    if (!guestOutputBox) return;
    const instName = guestInstrumentName.value.trim() || 'Guest Instrument';
    const portKey = guestStagePort.value;
    const aviomKey = guestAviomTarget.value;

    let portText = 'Front Left Box: Aux 1';
    let hardwareIn = 3;
    let defaultFader = 'Layer B, Fader 17 ("Aux 1")';
    let faderNum = 17;
    let layer = 'B';

    if (portKey === 'folk') {
      portText = 'Back Left Box: Folk';
      hardwareIn = 9;
      defaultFader = 'Layer B, Fader 18 ("Folk")';
      faderNum = 18;
      layer = 'B';
    } else if (portKey === 'stomp') {
      portText = 'Front Left Box: Stomp';
      hardwareIn = 4;
      defaultFader = 'Layer B, Fader 18 ("Stomp")';
      faderNum = 18;
      layer = 'B';
    } else if (portKey === 'drumSpare') {
      portText = 'Drum Cage Left: Spare (In 21)';
      hardwareIn = 21;
      defaultFader = 'Layer B, Fader 21 ("Drum talk / Spare")';
      faderNum = 21;
      layer = 'B';
    }

    let aviomMixText = 'MIX 6 (Flex 1)';
    if (aviomKey === 'mix1') aviomMixText = 'MIX 1 (Drums Aviom)';
    if (aviomKey === 'mix4') aviomMixText = 'MIX 4 (Keys Aviom)';
    if (aviomKey === 'mix5') aviomMixText = 'MIX 5 (Electric Guitar Aviom)';
    if (aviomKey === 'mix9') aviomMixText = 'MIX 9 (Vocals 1 & 2 Aviom)';

    guestOutputBox.innerHTML = `
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-blue);">
        📋 Routing Steps for ${instName}
      </h4>

      <ol class="step-actions-list" style="margin: 0.5rem 0;">
        <li class="step-action-item">
          <span class="step-action-number">1</span>
          <span><strong>Physical Stage Connection:</strong> Plug ${instName}'s XLR cable into <strong>${portText}</strong> (Hardwired to <strong>Local Input ${hardwareIn}</strong>).</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">2</span>
          <span><strong>Console Fader & Soft-Patch:</strong> On Si Impact, go to <strong>${layer}</strong> ➔ Press <strong>SEL</strong> above Fader ${faderNum} ➔ Tap <strong>Inputs</strong> on touchscreen ➔ Verify patched to <strong>Input ${hardwareIn}</strong>. (Optional: rename scribble strip to "${instName}").</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">3</span>
          <span><strong>Send to Main Sanctuary & Stream:</strong> With SEL illuminated, press <strong>MIX 12</strong> (Stereo House) ➔ Raise Fader ${faderNum} to set sanctuary volume. Then press <strong>MIX 14</strong> (Live Stream) ➔ Raise Fader ${faderNum} to send to broadcast.</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">4</span>
          <span><strong>Send to Aviom In-Ears:</strong> Press <strong>${aviomMixText}</strong> ➔ Raise Fader ${faderNum} to feed ${instName} into in-ear monitors.</span>
        </li>
      </ol>

      <div class="step-tip-box" style="margin-top: 0.5rem;">
        <strong>⚠️ Subwoofer Warning:</strong> Ensure ${instName} is <em>NOT</em> routed to MIX 8 (Subwoofer) unless it is a deep low-end bass instrument.
      </div>
    `;
  }

  if (guestInstrumentName) guestInstrumentName.addEventListener('input', updateGuestCalculator);
  if (guestStagePort) guestStagePort.addEventListener('change', updateGuestCalculator);
  if (guestAviomTarget) guestAviomTarget.addEventListener('change', updateGuestCalculator);

  function renderClickSwitcher(isFront) {
    if (!clickOutputBox) return;
    btnClickFront.classList.toggle('btn-resolved', isFront);
    btnClickFront.classList.toggle('btn-next-step', !isFront);
    btnClickDrums.classList.toggle('btn-resolved', !isFront);
    btnClickDrums.classList.toggle('btn-next-step', isFront);

    const inputNum = isFront ? 12 : 20;
    const locationName = isFront ? 'Center Front Stage Box' : 'Drum Cage Left Plate';

    clickOutputBox.innerHTML = `
      <h4 style="font-size: 0.95rem; font-weight: 700; color: ${isFront ? 'var(--accent-blue)' : 'var(--accent-emerald)'};">
        ${isFront ? '📍 Front Stage Click Active' : '🥁 Drum Cage Click Active'}
      </h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        Follow these 4 quick taps on the Soundcraft Si Impact soundboard:
      </p>
      <ol class="step-actions-list" style="margin: 0.5rem 0;">
        <li class="step-action-item">
          <span class="step-action-number">1</span>
          <span>Press <strong>Layer B</strong> button on the left of the faders.</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">2</span>
          <span>Press the illuminated <strong>SEL</strong> button above <strong>Fader 2</strong> (labeled <em>"Click"</em>).</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">3</span>
          <span>On the main soundboard touchscreen menu, tap <strong>Inputs</strong>.</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">4</span>
          <span>Tap and select <strong>Input ${inputNum}</strong> (${locationName}).</span>
        </li>
        <li class="step-action-item">
          <span class="step-action-number">5</span>
          <span><strong>In-Ear Send Check:</strong> Press Aviom Mix buses (Mix 1-5, 9-11) ➔ Raise Fader 2 to nominal for musicians' in-ears. (<em>Ensure Fader 2 remains down / off on MIX 12 House</em>).</span>
        </li>
      </ol>
    `;
  }

  if (btnClickFront && btnClickDrums) {
    btnClickFront.addEventListener('click', () => renderClickSwitcher(true));
    btnClickDrums.addEventListener('click', () => renderClickSwitcher(false));
  }

  // --------------------------------------------------------------------------
  // 6b. Sound Booth Breaker Panel S Directory & Filtering
  // --------------------------------------------------------------------------
  const breakerTableBody = document.getElementById('breakerTableBody');
  const breakerFilterChips = document.querySelectorAll('#breakerFilterBar .filter-chip');
  const breakerSearchInput = document.getElementById('breakerSearchInput');
  let activeBreakerFilter = 'all';

  function renderBreakerDirectory() {
    if (!breakerTableBody || !AV_DATA.electricalPanels || !AV_DATA.electricalPanels.panelS) return;
    const circuits = AV_DATA.electricalPanels.panelS.circuits;
    const query = (breakerSearchInput ? breakerSearchInput.value : '').toLowerCase().trim();

    const filtered = circuits.filter(c => {
      const matchesFilter = activeBreakerFilter === 'all' || c.category === activeBreakerFilter;
      const matchesSearch = !query || 
        c.circuit.toLowerCase().includes(query) ||
        c.label.toLowerCase().includes(query) ||
        c.assignment.toLowerCase().includes(query) ||
        (c.notes && c.notes.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      breakerTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">
            No electrical circuits match your search or filter.
          </td>
        </tr>
      `;
      return;
    }

    breakerTableBody.innerHTML = filtered.map(c => {
      let catBadge = '';
      if (c.category === 'stage') catBadge = `<span style="background: rgba(234, 179, 8, 0.15); color: #facc15; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">⚡ Stage Power</span>`;
      else if (c.category === 'booth') catBadge = `<span style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">🔌 Sound Booth</span>`;
      else if (c.category === 'lighting') catBadge = `<span style="background: rgba(168, 85, 247, 0.15); color: #c084fc; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">💡 Lighting</span>`;
      else if (c.category === 'video') catBadge = `<span style="background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">📺 Video Displays</span>`;
      else if (c.category === 'audio') catBadge = `<span style="background: rgba(244, 63, 94, 0.15); color: #fb7185; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">🔉 Subwoofers</span>`;
      else catBadge = `<span style="background: rgba(148, 163, 184, 0.15); color: #94a3b8; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 600; font-size: 0.72rem;">⚪ Spare</span>`;

      let resetAction = 'Cycle OFF ➔ ON';
      if (c.critical) {
        resetAction = `<strong style="color: #facc15;">Cycle Breaker ${c.circuit} OFF ➔ ON</strong>`;
      }

      return `
        <tr>
          <td>
            <span class="bus-pill" style="background: rgba(234, 179, 8, 0.15); color: #facc15;">#${c.circuit}</span>
          </td>
          <td>
            <strong style="color: var(--text-primary);">${c.icon} ${c.label}</strong>
          </td>
          <td>
            <div style="font-weight: 500; color: var(--text-primary);">${c.assignment}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">${c.notes || ''}</div>
          </td>
          <td>${catBadge}</td>
          <td style="font-size: 0.78rem;">${resetAction}</td>
        </tr>
      `;
    }).join('');
  }

  breakerFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      activeBreakerFilter = chip.dataset.breakerfilter;
      breakerFilterChips.forEach(c => c.classList.toggle('active', c === chip));
      renderBreakerDirectory();
    });
  });

  if (breakerSearchInput) {
    breakerSearchInput.addEventListener('input', () => {
      renderBreakerDirectory();
    });
  }

  // --------------------------------------------------------------------------
  // 7. Service Readiness Checklist
  // --------------------------------------------------------------------------
  function renderChecklist() {
    if (!checklistGrid) return;
    checklistGrid.innerHTML = '';

    let checkedCount = 0;
    const totalCount = AV_DATA.preServiceChecklist.length;

    AV_DATA.preServiceChecklist.forEach(item => {
      const isChecked = !!state.checkedListItems[item.id];
      if (isChecked) checkedCount++;

      const card = document.createElement('label');
      card.className = `check-item-card ${isChecked ? 'completed' : ''}`;
      card.innerHTML = `
        <input type="checkbox" class="check-item-checkbox" ${isChecked ? 'checked' : ''} data-id="${item.id}">
        <div>
          <span style="font-size: 0.7rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">
            ${item.category}
          </span>
          <p class="check-item-text">${item.label.replace('1NormalSunday', '<strong style="color: #f87171; background: rgba(239, 68, 68, 0.15); padding: 0.1rem 0.35rem; border-radius: 4px;">1NormalSunday</strong>')}</p>
        </div>
      `;

      card.querySelector('input').addEventListener('change', (e) => {
        state.checkedListItems[item.id] = e.target.checked;
        localStorage.setItem('av_checklist_state', JSON.stringify(state.checkedListItems));
        renderChecklist();
      });

      checklistGrid.appendChild(card);
    });

    const percent = Math.round((checkedCount / totalCount) * 100);
    if (chkProgressFill) chkProgressFill.style.width = `${percent}%`;
    if (chkProgressText) chkProgressText.textContent = `${percent}% Ready (${checkedCount}/${totalCount})`;
  }

  if (btnResetChecklist) {
    btnResetChecklist.addEventListener('click', () => {
      if (confirm('Reset all checklist items for a new service?')) {
        state.checkedListItems = {};
        localStorage.removeItem('av_checklist_state');
        renderChecklist();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. QR Code Generation (Guest Wi-Fi, WaveCAST, Report Form & VoxStream /display)
  // --------------------------------------------------------------------------
  function getVoxstreamDeviceIp() {
    // 1. Saved custom override in localStorage
    const savedIp = localStorage.getItem('voxstream_device_ip');
    if (savedIp && savedIp.trim()) {
      return savedIp.trim();
    }

    // 2. Setting from appSettings if available
    if (appSettings && appSettings.voxstreamDeviceIp && appSettings.voxstreamDeviceIp.trim()) {
      return appSettings.voxstreamDeviceIp.trim();
    }

    // 3. Current window location hostname if not localhost or loopback
    const host = window.location.hostname;
    if (host && host !== 'localhost' && host !== '127.0.0.1' && host !== '') {
      return host;
    }

    // 4. Check if publicBaseUrl has a hostname that is not localhost
    if (appSettings && appSettings.publicBaseUrl) {
      try {
        const u = new URL(appSettings.publicBaseUrl.startsWith('http') ? appSettings.publicBaseUrl : `https://${appSettings.publicBaseUrl}`);
        if (u.hostname && u.hostname !== 'localhost' && u.hostname !== '127.0.0.1') {
          return u.hostname;
        }
      } catch (e) {}
    }

    // 5. Default sanctuary sound booth reserved IP
    return '192.168.1.150';
  }

  function setVoxstreamDeviceIp(newIp, isUserOverride = true) {
    if (!newIp) return;
    // Clean string: strip http://, ports, paths
    let cleanIp = newIp.trim().replace(/^https?:\/\//i, '').split(':')[0].replace(/\/+$/, '');
    if (!cleanIp) return;

    if (isUserOverride) {
      localStorage.setItem('voxstream_device_ip', cleanIp);
      if (appSettings) {
        appSettings.voxstreamDeviceIp = cleanIp;
        localStorage.setItem('av_app_settings', JSON.stringify(appSettings));
      }
    }

    // Update inputs
    if (inputBoothDeviceIp && document.activeElement !== inputBoothDeviceIp) {
      inputBoothDeviceIp.value = cleanIp;
    }
    if (inputModalDeviceIp && document.activeElement !== inputModalDeviceIp) {
      inputModalDeviceIp.value = cleanIp;
    }

    generateCaptionsDisplayQR();

    // Show feedback if triggered by user
    if (ipSaveFeedback && isUserOverride) {
      ipSaveFeedback.style.display = 'inline';
      setTimeout(() => { ipSaveFeedback.style.display = 'none'; }, 2500);
    }
  }

  function getVoxstreamDisplayUrl(ip) {
    const activeIp = ip || getVoxstreamDeviceIp();
    return `http://${activeIp}:8765/display`;
  }

  // Attempt LAN IP auto-detection via WebRTC ICE candidates (works offline on local Wi-Fi)
  function detectLanIp() {
    if (typeof window === 'undefined' || !window.RTCPeerConnection) return;
    if (localStorage.getItem('voxstream_device_ip')) return; // do not overwrite manual setting

    try {
      const pc = new (window.RTCPeerConnection || window.webkitRTCPeerConnection)({ iceServers: [] });
      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer)).catch(() => {});
      pc.onicecandidate = (ice) => {
        if (!ice || !ice.candidate || !ice.candidate.candidate) return;
        const candidateStr = ice.candidate.candidate;
        // Search for IPv4 pattern
        const match = /([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(candidateStr);
        if (match && match[1] && !match[1].startsWith('127.')) {
          const detectedIp = match[1];
          try { pc.close(); } catch (e) {}
          if (!localStorage.getItem('voxstream_device_ip')) {
            setVoxstreamDeviceIp(detectedIp, false);
          }
        }
      };
      setTimeout(() => {
        try { pc.close(); } catch (e) {}
      }, 1500);
    } catch (e) {
      // Gracefully ignore WebRTC restrictions
    }
  }

  function generateCaptionsDisplayQR() {
    if (typeof QRCode === 'undefined') return;

    const deviceIp = getVoxstreamDeviceIp();
    const displayUrl = getVoxstreamDisplayUrl(deviceIp);

    // Update URL text and links across UI
    if (captionsDisplayUrlText) captionsDisplayUrlText.textContent = displayUrl;
    if (btnTestDisplayUrl) btnTestDisplayUrl.href = displayUrl;
    const linkOpenDisplayPage = document.getElementById('linkOpenDisplayPage');
    if (linkOpenDisplayPage) linkOpenDisplayPage.href = displayUrl;
    if (modalCaptionsUrlText) modalCaptionsUrlText.textContent = displayUrl;
    if (btnModalOpenDisplayUrl) btnModalOpenDisplayUrl.href = displayUrl;
    if (inputBoothDeviceIp && document.activeElement !== inputBoothDeviceIp) {
      inputBoothDeviceIp.value = deviceIp;
    }
    if (inputModalDeviceIp && document.activeElement !== inputModalDeviceIp) {
      inputModalDeviceIp.value = deviceIp;
    }

    // High contrast SVG options for mobile cameras
    const qrOptsDisplay = {
      type: 'svg',
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    };

    if (qrCaptionsDisplay) {
      QRCode.toString(displayUrl, qrOptsDisplay).then(svg => {
        qrCaptionsDisplay.innerHTML = svg;
      }).catch(console.error);
    }

    if (modalCaptionsQrCode) {
      QRCode.toString(displayUrl, { ...qrOptsDisplay, margin: 2 }).then(svg => {
        modalCaptionsQrCode.innerHTML = svg;
      }).catch(console.error);
    }
  }

  function openCaptionsQrModal() {
    if (!captionsQrModal) return;
    generateCaptionsDisplayQR();
    captionsQrModal.classList.add('open');
  }

  function closeCaptionsQrModal() {
    if (!captionsQrModal) return;
    captionsQrModal.classList.remove('open');
  }

  function copyCaptionsUrl(btn) {
    const url = getVoxstreamDisplayUrl();
    navigator.clipboard.writeText(url).then(() => {
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        setTimeout(() => { btn.innerHTML = originalText; }, 2000);
      }
    }).catch(() => {
      prompt('Copy Display Page URL:', url);
    });
  }

  function generateGuestQRCodes() {
    if (typeof QRCode === 'undefined') return;

    // Exact iOS, Android & Google Report Form URLs
    const iosUrl = "https://itunes.apple.com/us/app/wavecast-receiver/id1458383632?mt=8";
    const androidUrl = "https://play.google.com/store/apps/details?id=com.williamsav.wavecast_receiver&hl=en_US&gl=US";
    const reportFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdFImqNTuJq3KzdKxDhbLq4z-KST0zfMgCA9eWDbDU3pfhEUw/viewform?usp=dialog";
    const wifiQr = AV_DATA.wifiCredentials.qrString;

    const qrOpts = {
      type: 'svg',
      margin: 2,
      errorCorrectionLevel: 'M',
      width: 140,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    };

    const qrOptsReport = {
      type: 'svg',
      margin: 2,
      errorCorrectionLevel: 'M',
      width: 190,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    };

    if (qrWifi) {
      QRCode.toString(wifiQr, qrOpts).then(svg => { qrWifi.innerHTML = svg; }).catch(console.error);
    }
    if (qrAppStore) {
      QRCode.toString(iosUrl, qrOpts).then(svg => { qrAppStore.innerHTML = svg; }).catch(console.error);
    }
    if (qrGooglePlay) {
      QRCode.toString(androidUrl, qrOpts).then(svg => { qrGooglePlay.innerHTML = svg; }).catch(console.error);
    }
    const qrReportForm = document.getElementById('qrReportForm');
    if (qrReportForm) {
      QRCode.toString(reportFormUrl, qrOptsReport).then(svg => { qrReportForm.innerHTML = svg; }).catch(console.error);
    }

    // Generate VoxStream Live Captions Display QR Code
    generateCaptionsDisplayQR();
  }

  document.addEventListener('click', (e) => {
    // Quick Open Captions QR from Volunteer Hub Card
    if (e.target && (e.target.classList.contains('btn-share-captions-qr-hub') || e.target.closest('.btn-share-captions-qr-hub'))) {
      e.stopPropagation();
      e.preventDefault();
      openCaptionsQrModal();
      return;
    }

    if (e.target && (e.target.id === 'btnCopyWifiPass' || e.target.closest('#btnCopyWifiPass'))) {
      const btn = e.target.id === 'btnCopyWifiPass' ? e.target : e.target.closest('#btnCopyWifiPass');
      navigator.clipboard.writeText("Psalm27:4!").then(() => {
        if (btn) {
          btn.textContent = '✓ Copied!';
          setTimeout(() => { btn.textContent = '📋'; }, 2000);
        }
      });
    }

    if (e.target && (e.target.id === 'btnCopyFormUrl' || e.target.closest('#btnCopyFormUrl'))) {
      const btn = e.target.id === 'btnCopyFormUrl' ? e.target : e.target.closest('#btnCopyFormUrl');
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdFImqNTuJq3KzdKxDhbLq4z-KST0zfMgCA9eWDbDU3pfhEUw/viewform?usp=dialog";
      navigator.clipboard.writeText(formUrl).then(() => {
        if (btn) {
          btn.textContent = '✓ Link Copied!';
          setTimeout(() => { btn.textContent = '📋 Copy Link to Form'; }, 2000);
        }
      });
    }
  });

  if (modalQrCloseBtn) {
    modalQrCloseBtn.addEventListener('click', () => {
      guestQrModal.classList.remove('open');
    });
  }

  if (guestQrModal) {
    guestQrModal.addEventListener('click', (e) => {
      if (e.target === guestQrModal) {
        guestQrModal.classList.remove('open');
      }
    });
  }

  // Captions QR Modal Listeners
  if (btnOpenCaptionsQrModal) {
    btnOpenCaptionsQrModal.addEventListener('click', openCaptionsQrModal);
  }
  if (btnShareCaptionsModalInline) {
    btnShareCaptionsModalInline.addEventListener('click', openCaptionsQrModal);
  }
  if (btnOpenCaptionsQrModalFromCard) {
    btnOpenCaptionsQrModalFromCard.addEventListener('click', openCaptionsQrModal);
  }
  if (modalCaptionsQrCloseBtn) {
    modalCaptionsQrCloseBtn.addEventListener('click', closeCaptionsQrModal);
  }
  if (captionsQrModal) {
    captionsQrModal.addEventListener('click', (e) => {
      if (e.target === captionsQrModal) {
        closeCaptionsQrModal();
      }
    });
  }

  // Copy Buttons
  if (btnCopyDisplayUrl) {
    btnCopyDisplayUrl.addEventListener('click', () => copyCaptionsUrl(btnCopyDisplayUrl));
  }
  if (btnModalCopyDisplayUrl) {
    btnModalCopyDisplayUrl.addEventListener('click', () => copyCaptionsUrl(btnModalCopyDisplayUrl));
  }

  // Booth PC IP Settings & Auto-Detect Handlers
  if (btnSaveBoothDeviceIp && inputBoothDeviceIp) {
    btnSaveBoothDeviceIp.addEventListener('click', () => {
      setVoxstreamDeviceIp(inputBoothDeviceIp.value);
    });
    inputBoothDeviceIp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setVoxstreamDeviceIp(inputBoothDeviceIp.value);
      }
    });
  }

  if (btnDetectBoothDeviceIp) {
    btnDetectBoothDeviceIp.addEventListener('click', () => {
      localStorage.removeItem('voxstream_device_ip');
      detectLanIp();
      generateCaptionsDisplayQR();
      if (ipSaveFeedback) {
        ipSaveFeedback.textContent = '🔄 Auto-Detecting...';
        ipSaveFeedback.style.display = 'inline';
        setTimeout(() => {
          ipSaveFeedback.textContent = '✓ Updated!';
          setTimeout(() => { ipSaveFeedback.style.display = 'none'; }, 1500);
        }, 1000);
      }
    });
  }

  if (btnModalSaveDeviceIp && inputModalDeviceIp) {
    btnModalSaveDeviceIp.addEventListener('click', () => {
      setVoxstreamDeviceIp(inputModalDeviceIp.value);
    });
    inputModalDeviceIp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setVoxstreamDeviceIp(inputModalDeviceIp.value);
      }
    });
  }

  if (btnModalDetectDeviceIp) {
    btnModalDetectDeviceIp.addEventListener('click', () => {
      localStorage.removeItem('voxstream_device_ip');
      detectLanIp();
      generateCaptionsDisplayQR();
    });
  }

  // --------------------------------------------------------------------------
  // 9. Sound Booth Issue & Maintenance Report
  // --------------------------------------------------------------------------
  function renderLogbook() {
    const reportFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdFImqNTuJq3KzdKxDhbLq4z-KST0zfMgCA9eWDbDU3pfhEUw/viewform?usp=dialog";
    if (btnCopyFormUrl) {
      btnCopyFormUrl.addEventListener('click', () => {
        navigator.clipboard.writeText(reportFormUrl).then(() => {
          const orig = btnCopyFormUrl.innerHTML;
          btnCopyFormUrl.innerHTML = '✅ Link Copied to Clipboard!';
          btnCopyFormUrl.style.borderColor = 'var(--accent-emerald)';
          btnCopyFormUrl.style.color = 'var(--accent-emerald)';
          setTimeout(() => {
            btnCopyFormUrl.innerHTML = orig;
            btnCopyFormUrl.style.borderColor = '';
            btnCopyFormUrl.style.color = '';
          }, 2500);
        }).catch(() => {
          alert('Form URL: ' + reportFormUrl);
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 10. Interactive Live Search Palette & Dropdown
  // --------------------------------------------------------------------------
  const searchResultsDropdown = document.getElementById('searchResultsDropdown');
  let currentSelectedSearchIdx = -1;

  function highlightMatches(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<span class="search-highlight-text">$1</span>');
  }

  function getSearchIndex() {
    const items = [];

    // 1. Volunteer Quick-Fix Scenarios
    AV_DATA.troubleshootingScenarios.forEach(sc => {
      items.push({
        type: 'guide',
        category: '🚨 Troubleshooting Guides',
        title: sc.title,
        subtitle: `${sc.summary} (${sc.phases.length} Phases)`,
        badge: 'Quick-Fix',
        keywords: `${sc.title} ${sc.summary} ${sc.category} ${sc.phases.map(p => p.title + ' ' + p.location + ' ' + p.actionSteps.join(' ')).join(' ')} tv tvs screen hdmi splitter obs project embrace lontium extender transmitter tx receiver rx nest camera outlet timer ethernet cat6 wavecast reaper dead mic audio voxstream live captions subtitles stage prompter teleprompter read-along bionic reading asio wireless microphone shure sennheiser battery batteries rechargeable color code receiver rack mute crackle dropout static proclaim freeze slides slide lyrics wrong screen extend display mirroring on air off air mixing station ipad tablet disconnected backup search aviom sends gain in-ear monitors in-ears feedback ringing pastor lapel preset cajon mute band group venue live 360 venue360 speakers quiet silent ubnt ubiquiti switch sdi box camera black under desk birddog confidence monitor toggle switch button buzz hum ground loop ground lift di box lift switch ac power high pass filter hpf 80hz 60hz computer audio mac audio video sound macbook speakers line out spotify background music fader 22 fader 23 pc sound system startup boot order pop prevention power up crown amp atlas qsc foyer tv foyer audio lobby speakers fader 24 foyer bus`,
        action: () => {
          switchTab('volunteer-hub');
          selectScenario(sc.id);
          const el = document.getElementById('wizardCanvas');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 2. Livestream, Proclaim & Presentation Hub Items
    items.push({
      type: 'livestream',
      category: '📡 Livestream & Presentation',
      title: 'YouTube Livestream & ATEM Switcher Setup',
      subtitle: 'Unlock Laptop ➔ studio.youtube.com ➔ ON AIR on ATEM ➔ Go Live ~15 min prior',
      badge: 'Livestream Hub',
      keywords: 'livestream live stream broadcast youtube studio.youtube.com atem on air go live rec backup recording foyer tv wide stage second service mix 14 audio verify phone no audio sound pc left of stage red tape cord',
      action: () => {
        switchTab('livestream-hub');
        switchLivestreamSub('sub-setup');
      }
    });

    items.push({
      type: 'livestream',
      category: '📡 Livestream & Presentation',
      title: 'Livestream Station & YouTube Studio Access',
      subtitle: 'Broadcast laptop setup • studio.youtube.com • ATEM Mini controls',
      badge: 'Broadcast Hub',
      keywords: 'laptop broadcast youtube live stream account access studio.youtube.com atem setup',
      action: () => {
        switchTab('livestream-hub');
        switchLivestreamSub('sub-setup');
      }
    });

    items.push({
      type: 'proclaim',
      category: '📡 Livestream & Presentation',
      title: 'Proclaim Presentation & Slides Hub',
      subtitle: 'Open service order ➔ On Air ➔ Sanctuary TV HDMI Splitter & Stage Confidence',
      badge: 'Proclaim Hub',
      keywords: 'proclaim slides lyrics presentation on air off air normal f9 blank f10 clear f11 logo f12 virtual screen display settings sanctuary tvs',
      action: () => {
        switchTab('livestream-hub');
        switchLivestreamSub('sub-proclaim');
      }
    });

    items.push({
      type: 'lighting',
      category: '💡 Sound Booth Lighting',
      title: 'Sound Booth Lighting Controller (7 Wall Presets)',
      subtitle: '1: Before/After • 2: Songs/Music • 3: Everything Else • 4: Video • 5: Full 100% • 6: Spoken Word • 7: Off',
      badge: '7 Presets',
      keywords: 'lighting levels level 1 level 2 level 3 level 4 level 5 level 6 level 7 button 1 button 2 button 3 button 4 button 5 button 6 button 7 before after service songs music worship everything else video showing show video full 100 spoken word preaching sermon off shutdown wall keypad controller sticky note',
      action: () => {
        switchTab('livestream-hub');
        switchLivestreamSub('sub-lights');
      }
    });

    // 3. Embrace & Accessibility Hub Items
    items.push({
      type: 'embrace',
      category: '🤝 Embrace & Accessibility',
      title: 'Embrace Room, Accessibility & WaveCAST Hub',
      subtitle: 'Embrace Room TV extender, OBS closed captions & WaveCAST assistive listening operations',
      badge: 'Embrace Hub',
      keywords: 'embrace wavecast hearing wifi guest qr captions closed subtitles tv extender lontium',
      action: () => {
        switchTab('embrace-hub');
      }
    });

    items.push({
      type: 'wavecast',
      category: '🤝 Embrace & Accessibility',
      title: 'Church Wi-Fi Network & Password',
      subtitle: `SSID: "Waypoint Guest" • Password: "Psalm27:4!" (WPA2)`,
      badge: 'Wi-Fi Credentials',
      keywords: 'wifi wi-fi password waypoint guest psalm psalm27:4! qr scan connect internet network join',
      action: () => {
        switchTab('embrace-hub');
        switchEmbraceSub('sub-wavecast');
      }
    });

    items.push({
      type: 'wavecast',
      category: '🤝 Embrace & Accessibility',
      title: 'WaveCAST App Download QR Codes',
      subtitle: 'Apple iOS App Store & Android Google Play Store direct links',
      badge: 'App Downloads',
      keywords: 'wavecast app store ios apple iphone android google play download hearing receiver assist williams av',
      action: () => {
        switchTab('embrace-hub');
        switchEmbraceSub('sub-wavecast');
      }
    });

    items.push({
      type: 'embrace',
      category: '🤝 Embrace & Accessibility',
      title: 'Embrace Room TV & Video Extender System',
      subtitle: 'HDMI-over-Ethernet: Transmitter (TX) under booth desk ➔ Receiver (RX) behind Embrace TV (Nest camera timer)',
      badge: 'Embrace TV',
      keywords: 'embrace tv conference room video extender hdmi over ethernet transmitter tx receiver rx nest camera outlet timer',
      action: () => {
        switchTab('embrace-hub');
        switchEmbraceSub('sub-embracetv');
      }
    });

    items.push({
      type: 'embrace',
      category: '🤝 Embrace & Accessibility',
      title: 'VoxStream Live Captions & Stage Prompter Suite',
      subtitle: 'Real-time AI speech transcription, offline Scripture lookups, and mobile read-along on Port 8765',
      badge: 'VoxStream Suite',
      keywords: 'voxstream live captions subtitles stage prompter bionic reading teleprompter read-along port 8765 embrace display qr scripture panic drop',
      action: () => {
        switchTab('embrace-hub');
        switchEmbraceSub('sub-captions');
      }
    });

    items.push({
      type: 'guide',
      category: '📡 Livestream & Overlays',
      title: 'OBS Live Stream Captions Setup & Fix (Port 8765)',
      subtitle: 'Browser source URL (http://127.0.0.1:8765/), mic VU meter, and Moonshine engine',
      badge: 'Stream Captions',
      keywords: 'obs captions stream live stream broadcast overlay url port 8765 mic level vu meter lag delay moonshine vosk panic drop',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('obs-captions');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    items.push({
      type: 'guide',
      category: '📱 Mobile Accessibility & Stage',
      title: 'Mobile Congregation Read-Along & Stage Prompter (/display)',
      subtitle: 'Wi-Fi QR scan, Waypoint Guest network, port 8765 firewall, and Bionic Reading',
      badge: 'Mobile Read-Along',
      keywords: 'mobile read along read-along readalong prompter teleprompter qr code wifi waypoint guest bionic reading wake lock stage confidence display embrace',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('embrace-captions-view');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    items.push({
      type: 'captions',
      category: '📲 Mobile Sharing & QR',
      title: 'Share Live Captions & Stage Prompter QR Code',
      subtitle: 'Open scannable QR code modal for congregation phones & tablets (Port 8765 /display)',
      badge: 'Share QR',
      keywords: 'qr qr code display qr captions qr share qr mobile read-along teleprompter stage prompter embrace captions phone scan camera waypoint guest voxstream 8765/display handout print',
      action: () => {
        openCaptionsQrModal();
      }
    });

    // 3. Click Track Items
    items.push({
      type: 'click',
      category: '⏱️ Click Track Switcher',
      title: 'Front Stage Click Track',
      subtitle: 'Center Front Stage Box (Input 12) ➔ Console Layer B, Fader 2',
      badge: 'In 12',
      keywords: 'click front stage center front input 12 tempo metronome layer b fader 2',
      action: () => {
        switchTab('click-hub');
        renderClickSwitcher(true);
      }
    });

    items.push({
      type: 'click',
      category: '⏱️ Click Track Switcher',
      title: 'Drum Cage Click Track',
      subtitle: 'Drum Cage Left Plate (Input 20) ➔ Console Layer B, Fader 2',
      badge: 'In 20',
      keywords: 'click drum cage drums plate input 20 tempo metronome layer b fader 2',
      action: () => {
        switchTab('click-hub');
        renderClickSwitcher(false);
      }
    });

    // 4. Weekend Pre-Service Checklist
    items.push({
      type: 'checklist',
      category: '📋 Weekend Checklist',
      title: 'Weekend Pre-Service Readiness Checklist',
      subtitle: 'Standard weekly startup verification for audio, visuals, livestream, and booth',
      badge: 'Weekend Routine',
      keywords: 'checklist pre service pre-service readiness Sunday weekend routine tasks startup verify test audio proclaim atem youtube stream lighting',
      action: () => {
        switchTab('checklist');
      }
    });

    // 5. Sound Booth Issue & Maintenance Report (Google Form)
    items.push({
      type: 'report',
      category: '📋 Issue & Maintenance Report',
      title: 'Sound Booth Issue & Maintenance Report (Google Form)',
      subtitle: 'Scan QR code or open form to report broken cables, bad gear, or request repairs',
      badge: 'Google Form',
      keywords: 'report issue maintenance google form broken cable bad jack dead battery repair fix feedback log request replacement',
      action: () => {
        switchTab('logbook');
      }
    });

    // 6. Saturday Practice & Line Check Workflow
    items.push({
      type: 'rehearsal',
      category: '🎸 Saturday Rehearsal & Line Check',
      title: 'Saturday Line Check & Rehearsal Workflow',
      subtitle: 'Systematic sound check protocol: Gain (-8 to -10 dB) ➔ Tone presets ➔ Aviom confirmation ➔ M.A.S.S. Rehearsal',
      badge: 'Line Check',
      keywords: 'saturday practice rehearsal line check workflow sound check gain target -8 -10 db mass protocol drums bass keys guitar vocal aviom talkback owens layer',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-rehearsal');
      }
    });

    items.push({
      type: 'rehearsal',
      category: '🎸 Saturday Rehearsal & Line Check',
      title: 'Strict Hardware Boot Order (Console to Amps)',
      subtitle: '1. Board ➔ 2. Wireless Rack ➔ 3. ATLAS ➔ 4. House AMP ➔ 5. QSC Wall Speakers ➔ 6. ATEM ➔ 7. AVIOM Switch',
      badge: 'Boot Order',
      keywords: 'boot order power up hardware power on sequence board console wireless rack atlas house amp qsc speakers atem aviom switch stage left shutdown reverse',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-rehearsal');
      }
    });

    items.push({
      type: 'rehearsal',
      category: '🎸 Saturday Rehearsal & Line Check',
      title: 'Saving Show File Protocol (Never Overwrite 1NormalSunday)',
      subtitle: 'Menu ➔ Show ➔ Save As ➔ [MM.DD.YYYY] ➔ Apply ➔ MMC ➔ Other Folder ➔ OK',
      badge: 'Show File',
      keywords: 'save show file 1normalsunday date format mm.dd.yyyy save as mmc other folder never overwrite show scene soundcraft',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-rehearsal');
      }
    });

    items.push({
      type: 'guest',
      category: '🎻 Guest & Playback Patching',
      title: 'iPad & Mobile Audio Playback (Through Aviom & House)',
      subtitle: 'Method 1: Click cable into spare instrument port (Layer A) • Method 2: Click channel send to Mix 12',
      badge: 'iPad Playback',
      keywords: 'ipad iphone phone audio playback music practice tracks aviom and house click cable aux 1 spare instrument vocal port practice caution sunday',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-guest');
      }
    });

    items.push({
      type: 'guide',
      category: '💻 Computer & Playback Audio',
      title: 'Computer Audio / Mac Video Playback Has No Sound',
      subtitle: 'macOS Output device ➔ Si Impact Layer A Fader 23 (Mac) / Fader 22 (PC) ➔ Mix 12 House',
      badge: 'Mac/PC Audio',
      keywords: 'computer audio mac video sound no sound from mac laptop youtube video sermon clip spotify proclaim audio fader 23 fader 22 layer a mix 12 house master lr',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('computer-audio-no-sound');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    items.push({
      type: 'guide',
      category: '⚡ Stage Noise & Audio Tools',
      title: 'Loud Buzz / Ground Hum on Stage (DI Box Ground Lift)',
      subtitle: 'Flip GND / LIFT switch on DI box (#1 fix) ➔ Panel S Breakers 4 & 6 ➔ 80Hz HPF',
      badge: 'Ground Lift',
      keywords: 'buzz hum ground loop ground lift di box stage noise 60hz guitar buzz pedalboard acoustic guitar keys noise breaker 4 breaker 6 hpf',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('ground-hum-buzz');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    items.push({
      type: 'guide',
      category: '⚡ Power & Startup Sequence',
      title: 'Sound Booth Morning System Startup & Boot Order',
      subtitle: '1. Board ➔ 2. Wireless ➔ 3. ATLAS ➔ 4. House AMP ➔ 5. QSC Wall Speakers ➔ 6. ATEM ➔ 7. Aviom',
      badge: 'Boot Order',
      keywords: 'system boot startup boot order power sequence morning power on pop prevention speaker pop crown amp atlas qsc speakers soundcraft venue live 360',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('system-boot-order');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    items.push({
      type: 'guide',
      category: '📺 Screens & Lobby Displays',
      title: 'Foyer TV & Lobby Audio Feed (Foyer Bus)',
      subtitle: 'Foyer TV HDMI 1 • ATEM wide stage key • Layer A Fader 24 Foyer audio bus',
      badge: 'Foyer AV',
      keywords: 'foyer tv lobby tv audio feed foyer bus layer a fader 24 wide stage key second service gathering',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('foyer-tv-audio');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // 7. Stage Boxes & Input Channels
    AV_DATA.stageBoxes.forEach(box => {
      items.push({
        type: 'stagebox',
        category: '🗺️ Stage Boxes & Tie-Lines',
        title: `${box.name}`,
        subtitle: `${box.location} • ${box.inputs.length} Audio Inputs`,
        badge: 'Stage Box',
        keywords: `${box.name} ${box.location} ${box.description || ''}`,
        action: () => {
          switchTab('audio-hub');
          switchAudioSub('sub-stage');
          state.activeStageBoxId = box.id;
          renderStageMap();
        }
      });

      box.inputs.forEach(inp => {
        items.push({
          type: 'stageinput',
          category: '🗺️ Stage Boxes & Tie-Lines',
          title: `${inp.label} (Input ${inp.boxInput})`,
          subtitle: `${box.name} ➔ ${inp.destination} ${inp.faderLayer ? `[Layer ${inp.faderLayer} / Fader ${inp.faderNum}]` : ''}`,
          badge: `In ${inp.boxInput}`,
          keywords: `${inp.label} ${inp.destination} ${inp.cableColor || ''} ${inp.notes || ''} ${box.name} in ${inp.boxInput} input ${inp.boxInput}`,
          action: () => {
            switchTab('audio-hub');
            switchAudioSub('sub-stage');
            state.activeStageBoxId = box.id;
            renderStageMap();
          }
        });
      });
    });

    // 5. Soundcraft Si Impact Console Faders
    for (const [layerKey, layerObj] of Object.entries(AV_DATA.consoleLayers)) {
      layerObj.faders.forEach(f => {
        items.push({
          type: 'console',
          category: `🎛️ Soundboard Faders (Layer ${layerKey})`,
          title: `Fader ${f.fader}: ${f.scribble} (${f.source})`,
          subtitle: `Layer ${layerKey} • Patch: ${f.patch || 'Internal/Bus'} • Category: ${f.category || 'General'}`,
          badge: `L${layerKey}:F${f.fader}`,
          keywords: `${f.scribble} ${f.source} ${f.note || ''} ${f.patch || ''} layer ${layerKey} fader ${f.fader} ch ${f.fader} channel ${f.fader}`,
          action: () => {
            switchTab('audio-hub');
            switchAudioSub('sub-console');
            renderConsoleLayer(layerKey);
            openFaderDetailModal(f, layerKey);
          }
        });
      });
    }

    // 6. Mix Buses
    AV_DATA.mixBuses.forEach(b => {
      items.push({
        type: 'mixbus',
        category: '🔀 Mix Buses & Master Outputs',
        title: `Mix ${b.busNumber}: ${b.tapeLabel}`,
        subtitle: `${b.function} ➔ ${b.destination} (${b.description})`,
        badge: `Mix ${b.busNumber}`,
        keywords: `mix ${b.busNumber} bus ${b.busNumber} ${b.tapeLabel} ${b.function} ${b.destination} ${b.description}`,
        action: () => {
          switchTab('audio-hub');
          switchAudioSub('sub-buses');
        }
      });
    });

    // 7. System Architecture & Engineering Specifications
    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'House & Master Routing (AES Out 01 & LR Button)',
      subtitle: 'Mix 12 (House) & Mix 13 (Drums) ➔ LR Button ➔ Physical AES Out 01',
      badge: 'AES Out 01',
      keywords: 'house master routing aes out 01 lr button mix 12 mix 13 bus-to-master subgroup digital output',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'Aux-Fed Subwoofer Management (Mix 8)',
      subtitle: '7 Low-End Sources: Bass, Keys, Kick, Snare, Low Tom, Cajon, Pad',
      badge: 'Mix 8 (Sub)',
      keywords: 'aux-fed sub mix 8 subwoofer bass keys kick snare low tom floor tom cajon stomp pad crossover low-end',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'Stage Box vs Local Preamp Split (MADI Snake)',
      subtitle: 'Local Inputs 1-23 (Analog) vs Drum Cage Right Plate (Mini Stagebox 32i MADI 17-24)',
      badge: 'Mini Stagebox 32i',
      keywords: 'stage box split local inputs preamps 1-23 mini stagebox 32i madi snake drum cage digital snake brown red orange yellow green blue purple grey',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'Aviom In-Ear Personal Monitoring Matrix',
      subtitle: 'Dedicated Mixes 1-5, 9-11 & Flex 1 (Mix 6 Violin/Guest) & Flex 2 (Mix 7)',
      badge: 'Aviom Map',
      keywords: 'aviom monitor mapping mix 1 drums mix 2 bass mix 3 talkback mix 4 keys mix 5 electric mix 9 vocals mix 10 mix 11 acoustic flex 1 flex 2 violin cello',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'Live Stream Broadcast Feed & tOTEM Rule',
      subtitle: 'Mix 14 independent broadcast mix + tOTEM follow mode for new inputs + Ambient mics',
      badge: 'Mix 14 Stream',
      keywords: 'live stream broadcast mix 14 totem follow mode ambient room mics reaper daw',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio Architecture & Routing',
      title: 'DAW Reaper & Lexicon FX Returns (Layer C)',
      subtitle: 'Fader 18: To Reaper, Fader 19: From Reap, Faders 21-24: Lexicon FX Returns',
      badge: 'Layer C DAW/FX',
      keywords: 'daw reaper tracking fader 18 to reaper fader 19 from reap lexicon fx returns vocal reverb drum plate snare verb acoustic pad reverb',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    items.push({
      type: 'arch',
      category: '📐 Audio & Video Architecture',
      title: 'Embrace Room TV & Video Extender System',
      subtitle: 'HDMI-over-Ethernet: Transmitter (TX) under sound booth desk ➔ Receiver (RX) behind Embrace TV (Nest camera outlet timer)',
      badge: 'HDMI Extender',
      keywords: 'embrace room tv video extender hdmi over ethernet transmitter tx receiver rx nest camera outlet timer lontium no signal cat6 network conference room',
      action: () => {
        switchTab('audio-hub');
        switchAudioSub('sub-arch');
      }
    });

    // 7b. Electrical Panels & Breakers (Panel S & Lighting)
    if (AV_DATA.electricalPanels && AV_DATA.electricalPanels.panelS) {
      const panel = AV_DATA.electricalPanels.panelS;
      items.push({
        type: 'breaker',
        category: '⚡ Electrical Panels & Breakers',
        title: 'Gray Metal Electrical Panel (Panel S)',
        subtitle: 'Sound Booth Breaker Panel: Stage floor pockets, platform power, booth outlets, TVs, projectors, subwoofers',
        badge: 'Panel S',
        keywords: 'panel s electrical panel gray metal breaker breakers sound booth stage floor receptacles platform power lighting subwoofers tvs',
        action: () => {
          switchTab('audio-hub');
          switchAudioSub('sub-power');
        }
      });

      items.push({
        type: 'breaker',
        category: '⚡ Electrical Panels & Breakers',
        title: 'Large Black Electrical Panel (Lighting)',
        subtitle: 'Dedicated exclusively to sanctuary architectural and theatrical stage lighting control',
        badge: 'Lighting Panel',
        keywords: 'black lighting panel electrical panel stage lighting sanctuary lights dimmer',
        action: () => {
          switchTab('audio-hub');
          switchAudioSub('sub-power');
        }
      });

      panel.circuits.forEach(c => {
        items.push({
          type: 'circuit',
          category: '⚡ Panel S Circuits',
          title: `Breaker ${c.circuit}: ${c.label}`,
          subtitle: `${c.assignment} • ${c.notes || ''}`,
          badge: `Ckt #${c.circuit}`,
          keywords: `breaker circuit ${c.circuit} ${c.label} ${c.assignment} ${c.notes || ''} panel s power reset tripped floor recept stage sound rm lights quad`,
          action: () => {
            switchTab('audio-hub');
            switchAudioSub('sub-power');
          }
        });
      });
    }

    // 7b. Mixing Station Tablet & iPad Reconnect
    items.push({
      type: 'guide',
      category: '📱 Tablet & Soundboard Control',
      title: 'Mixing Station Tablet / iPad App Reconnect',
      subtitle: 'Back Arrow (←) ➔ Backup search ➔ Tap Soundcraft Si Impact to reconnect',
      badge: 'Tablet / iPad',
      keywords: 'mixing station tablet ipad app reconnect backup search offline disconnect soundcraft remote control faders hiqnet network wifi',
      action: () => {
        switchTab('volunteer-hub');
        selectScenario('mixing-station-disconnect');
        const el = document.getElementById('wizardCanvas');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // 8. Sound Booth Issue Report (Google Form)
    items.push({
      type: 'log',
      category: '📝 Tech Team Issue Report',
      title: 'Sound Booth Issue & Maintenance Report (Google Form)',
      subtitle: 'Report broken cables, dead gear, battery problems, or needed booth supplies',
      badge: 'Report Issue',
      keywords: 'report form issue maintenance broken cable dead mic battery supplies request logbook google form feedback',
      action: () => {
        switchTab('logbook');
      }
    });

    // 9. Master Documentation Google Doc Link
    items.push({
      type: 'doc',
      category: '📄 Master Documentation',
      title: 'Waypoint Sound Booth Documentation (Google Doc)',
      subtitle: 'Open the original 23-page master documentation guide in a new tab',
      badge: 'Google Doc ↗',
      keywords: 'google doc docs documentation 23 page master manual guide pdf link document spreadsheet',
      action: () => {
        window.open('https://docs.google.com/document/d/13H1LsbhdocR-NE9Hpa9k5cjeHOpi8mQa-IBDHi4dhpI/edit?usp=sharing', '_blank');
      }
    });

    // 10. PWA Offline Installation Entry
    items.push({
      type: 'pwa',
      category: '💾 Offline Desktop App',
      title: 'Install Waypoint AV to Computer (Offline PWA)',
      subtitle: 'Works 100% offline without internet in the sound booth',
      badge: '📥 Install App',
      keywords: 'pwa offline download install app desktop mac windows chromebook cache save',
      action: () => {
        if (deferredInstallPrompt) {
          deferredInstallPrompt.prompt();
        } else {
          alert('To install Waypoint AV:\n\n• In Chrome/Edge: Click the Install icon (computer with down arrow) in your browser address bar.\n• In Safari (macOS): Click File ➔ Add to Dock.\n\nOnce installed, this app will work completely offline without an internet connection!');
        }
      }
    });

    return items;
  }

  // Typo and Phonetic Dictionary for Fuzzy Search
  const SEARCH_TYPO_MAP = {
    'atme': 'atem',
    'atme mini': 'atem',
    'aveom': 'aviom',
    'aviam': 'aviom',
    'avom': 'aviom',
    'procalim': 'proclaim',
    'procliam': 'proclaim',
    'soundbord': 'soundboard',
    'sound bord': 'soundboard',
    'splitr': 'splitter',
    'spliter': 'splitter',
    'wavelisten': 'wavecast',
    'wavcast': 'wavecast',
    'cajone': 'cajon',
    'djemb': 'djembe',
    'wierless': 'wireless',
    'wirless': 'wireless',
    'micophone': 'microphone',
    'screan': 'screen',
    'screans': 'screens',
    'projecter': 'projector',
    'tablit': 'tablet',
    'tablett': 'tablet',
    'tabelt': 'tablet',
    'ipadd': 'ipad',
    'iapp': 'ipad',
    'mixstation': 'mixing station',
    'mixingstation': 'mixing station',
    'mix station': 'mixing station',
    'voxtream': 'voxstream',
    'voxstreem': 'voxstream',
    'readalong': 'read-along',
    'promter': 'prompter'
  };

  function normalizeSearchQuery(q) {
    let normalized = (q || '').toLowerCase();
    for (const [typo, fix] of Object.entries(SEARCH_TYPO_MAP)) {
      if (normalized.includes(typo)) {
        normalized = normalized.replace(new RegExp(typo, 'g'), fix);
      }
    }
    return normalized;
  }

  function handleSearchInput(query) {
    state.searchQuery = query.trim();
    if (!state.searchQuery) {
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      if (searchResultsDropdown) {
        searchResultsDropdown.innerHTML = '';
        searchResultsDropdown.classList.remove('open');
      }
      return;
    }

    if (searchClearBtn) searchClearBtn.style.display = 'block';

    const qRaw = state.searchQuery.toLowerCase();
    const qNormalized = normalizeSearchQuery(qRaw);
    const qTokens = qNormalized.split(/\s+/).filter(Boolean);
    const allItems = getSearchIndex();

    // Filter matching items (Exact substring, normalized typo match, and multi-word token match)
    const matches = allItems.filter(item => {
      const kLower = item.keywords.toLowerCase();
      const tLower = item.title.toLowerCase();
      
      // 1. Direct or normalized query match
      if (kLower.includes(qRaw) || kLower.includes(qNormalized)) return true;
      if (tLower.includes(qRaw) || tLower.includes(qNormalized)) return true;

      // 2. Multi-token match (all words match somewhere in item keywords or title)
      if (qTokens.length > 1 && qTokens.every(tok => kLower.includes(tok) || tLower.includes(tok))) {
        return true;
      }

      return false;
    });

    if (matches.length === 0) {
      searchResultsDropdown.innerHTML = `
        <div class="search-no-results">
          <div>🔍 No matches found for <strong>"${state.searchQuery}"</strong></div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
            Try searching: <em>TVs, OBS, Wavecast, Wi-Fi, Click, Pastor, Lead Acoustic, Mix 12, or Drum</em>
          </div>
        </div>
      `;
      searchResultsDropdown.classList.add('open');
      currentSelectedSearchIdx = -1;
      return;
    }

    // Group matches by category
    const grouped = {};
    matches.slice(0, 18).forEach(m => {
      if (!grouped[m.category]) grouped[m.category] = [];
      grouped[m.category].push(m);
    });

    let html = '';
    let itemCounter = 0;

    for (const [cat, groupItems] of Object.entries(grouped)) {
      html += `<div class="search-result-group-header">${cat}</div>`;
      groupItems.forEach(item => {
        const highlightedTitle = highlightMatches(item.title, state.searchQuery);
        const highlightedSubtitle = highlightMatches(item.subtitle, state.searchQuery);

        html += `
          <div class="search-result-item" data-idx="${itemCounter}">
            <div class="search-item-main">
              <div class="search-item-title">${highlightedTitle}</div>
              <div class="search-item-subtitle">${highlightedSubtitle}</div>
            </div>
            <span class="search-item-badge">${item.badge}</span>
          </div>
        `;
        itemCounter++;
      });
    }

    searchResultsDropdown.innerHTML = html;
    searchResultsDropdown.classList.add('open');
    currentSelectedSearchIdx = -1;

    // Attach click listeners to result items
    const visibleMatches = matches.slice(0, 18);
    const resultElements = searchResultsDropdown.querySelectorAll('.search-result-item');
    resultElements.forEach((el, idx) => {
      el.addEventListener('click', () => {
        visibleMatches[idx].action();
        searchResultsDropdown.classList.remove('open');
        globalSearchInput.value = '';
        if (searchClearBtn) searchClearBtn.style.display = 'none';
      });
    });
  }

  // Keyboard navigation & events
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });

    globalSearchInput.addEventListener('keydown', (e) => {
      const items = searchResultsDropdown.querySelectorAll('.search-result-item');
      if (!searchResultsDropdown.classList.contains('open') || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentSelectedSearchIdx = (currentSelectedSearchIdx + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentSelectedSearchIdx = (currentSelectedSearchIdx - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentSelectedSearchIdx >= 0 && items[currentSelectedSearchIdx]) {
          items[currentSelectedSearchIdx].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      } else if (e.key === 'Escape') {
        searchResultsDropdown.classList.remove('open');
      }
    });

    globalSearchInput.addEventListener('focus', () => {
      if (globalSearchInput.value.trim().length > 0) {
        handleSearchInput(globalSearchInput.value);
      }
    });
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === currentSelectedSearchIdx);
      if (idx === currentSelectedSearchIdx) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      globalSearchInput.value = '';
      handleSearchInput('');
      globalSearchInput.focus();
    });
  }

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      if (searchResultsDropdown) {
        searchResultsDropdown.classList.remove('open');
      }
    }
  });

  // Global Keyboard Shortcut: ⌘K or / to Focus Search
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (globalSearchInput) {
        globalSearchInput.focus();
        globalSearchInput.select();
      }
    } else if (e.key === '/' && document.activeElement !== globalSearchInput && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (globalSearchInput) {
        globalSearchInput.focus();
        globalSearchInput.select();
      }
    }
  });

  // Live Service Clock
  const liveServiceClock = document.getElementById('liveServiceClock');
  function updateServiceClock() {
    if (!liveServiceClock) return;
    const now = new Date();
    liveServiceClock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  updateServiceClock();
  setInterval(updateServiceClock, 1000);

  // --------------------------------------------------------------------------
  // PWA (Progressive Web App) Service Worker & Offline Capability
  // --------------------------------------------------------------------------
  const installPwaBtn = document.getElementById('installPwaBtn');
  let deferredInstallPrompt = null;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('[PWA] ServiceWorker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.warn('[PWA] ServiceWorker registration failed:', error);
        });
    });
  }

  // Handle Chrome / Edge / Desktop PWA installation prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installPwaBtn) {
      installPwaBtn.style.display = 'inline-flex';
    }
  });

  if (installPwaBtn) {
    installPwaBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      console.log('[PWA] Install prompt outcome:', outcome);
      deferredInstallPrompt = null;
      installPwaBtn.style.display = 'none';
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] Waypoint AV successfully installed as desktop app.');
    if (installPwaBtn) installPwaBtn.style.display = 'none';
  });

  // Online / Offline Network Status Monitoring
  const networkStatusIcon = document.getElementById('networkStatusIcon');
  const networkStatusText = document.getElementById('networkStatusText');

  function updateNetworkStatus() {
    if (!networkStatusText || !networkStatusIcon) return;
    if (navigator.onLine) {
      networkStatusIcon.textContent = '💾';
      networkStatusText.textContent = 'Offline Ready';
    } else {
      networkStatusIcon.textContent = '🔌';
      networkStatusText.textContent = 'Offline Mode (Full Access)';
    }
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

  // --------------------------------------------------------------------------
  // Application Settings & Public Base URL Engine
  // --------------------------------------------------------------------------
  // (appSettings is initialized at top of module)

  function getEffectiveBaseUrl() {
    if (appSettings.publicBaseUrl && appSettings.publicBaseUrl.trim()) {
      let url = appSettings.publicBaseUrl.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      return url.replace(/\/+$/, '');
    }
    return (window.location.origin + window.location.pathname).replace(/\/+$/, '');
  }

  const appSettingsModal = document.getElementById('appSettingsModal');
  const btnOpenSettingsModal = document.getElementById('btnOpenSettingsModal');
  const modalSettingsCloseBtn = document.getElementById('modalSettingsCloseBtn');
  const btnCancelSettings = document.getElementById('btnCancelSettings');
  const btnSaveSettings = document.getElementById('btnSaveSettings');
  const settingPublicBaseUrl = document.getElementById('settingPublicBaseUrl');
  const btnUseCurrentUrl = document.getElementById('btnUseCurrentUrl');
  const btnResetBaseUrl = document.getElementById('btnResetBaseUrl');
  const settingUrlPreview = document.getElementById('settingUrlPreview');
  const btnPlacardOpenSettings = document.getElementById('btnPlacardOpenSettings');
  const placardCurrentBaseUrl = document.getElementById('placardCurrentBaseUrl');

  function updateSettingsUrlPreview() {
    if (!settingUrlPreview || !settingPublicBaseUrl) return;
    let base = settingPublicBaseUrl.value.trim();
    if (!base) {
      base = (window.location.origin + window.location.pathname).replace(/\/+$/, '');
    } else if (!base.startsWith('http://') && !base.startsWith('https://')) {
      base = 'https://' + base;
    }
    base = base.replace(/\/+$/, '');
    settingUrlPreview.textContent = `${base}/#q/tvs`;
  }

  function openSettingsModal() {
    if (!appSettingsModal) return;
    if (settingPublicBaseUrl) {
      settingPublicBaseUrl.value = appSettings.publicBaseUrl || '';
      updateSettingsUrlPreview();
    }
    appSettingsModal.classList.add('open');
  }

  function closeSettingsModal() {
    if (!appSettingsModal) return;
    appSettingsModal.classList.remove('open');
  }

  if (btnOpenSettingsModal) {
    btnOpenSettingsModal.addEventListener('click', openSettingsModal);
  }

  if (btnPlacardOpenSettings) {
    btnPlacardOpenSettings.addEventListener('click', () => {
      if (placardPrintModal) placardPrintModal.classList.remove('open');
      openSettingsModal();
    });
  }

  if (modalSettingsCloseBtn) modalSettingsCloseBtn.addEventListener('click', closeSettingsModal);
  if (btnCancelSettings) btnCancelSettings.addEventListener('click', closeSettingsModal);

  if (appSettingsModal) {
    appSettingsModal.addEventListener('click', (e) => {
      if (e.target === appSettingsModal) closeSettingsModal();
    });
  }

  if (settingPublicBaseUrl) {
    settingPublicBaseUrl.addEventListener('input', updateSettingsUrlPreview);
  }

  if (btnUseCurrentUrl && settingPublicBaseUrl) {
    btnUseCurrentUrl.addEventListener('click', () => {
      settingPublicBaseUrl.value = (window.location.origin + window.location.pathname).replace(/\/+$/, '');
      updateSettingsUrlPreview();
    });
  }

  if (btnResetBaseUrl && settingPublicBaseUrl) {
    btnResetBaseUrl.addEventListener('click', () => {
      settingPublicBaseUrl.value = '';
      updateSettingsUrlPreview();
    });
  }

  if (btnSaveSettings && settingPublicBaseUrl) {
    btnSaveSettings.addEventListener('click', () => {
      appSettings.publicBaseUrl = settingPublicBaseUrl.value.trim();
      localStorage.setItem('av_app_settings', JSON.stringify(appSettings));
      closeSettingsModal();
      if (placardPrintModal && placardPrintModal.classList.contains('open')) {
        renderPlacardsModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Printable Equipment Station QR Placards Modal Engine
  // --------------------------------------------------------------------------
  const placardPrintModal = document.getElementById('placardPrintModal');
  const btnOpenPlacardsModal = document.getElementById('btnOpenPlacardsModal');
  const btnHubOpenPlacards = document.getElementById('btnHubOpenPlacards');
  const modalPlacardsCloseBtn = document.getElementById('modalPlacardsCloseBtn');
  const btnPrintPlacardsSheet = document.getElementById('btnPrintPlacardsSheet');
  const placardsSheetGrid = document.getElementById('placardsSheetGrid');

  async function renderPlacardsModal() {
    if (!placardsSheetGrid || !AV_DATA.boothPlacards) return;
    const qrEngine = window.QRCode || (typeof QRCode !== 'undefined' ? QRCode : null);
    if (!qrEngine) {
      console.warn('QRCode library not ready yet');
      return;
    }

    const effectiveBase = getEffectiveBaseUrl();
    if (placardCurrentBaseUrl) {
      placardCurrentBaseUrl.textContent = effectiveBase;
    }

    placardsSheetGrid.innerHTML = '';

    for (const placard of AV_DATA.boothPlacards) {
      const targetUrl = `${effectiveBase}/${placard.targetRoute}`;
      let qrSvg = '';
      try {
        qrSvg = await qrEngine.toString(targetUrl, {
          type: 'svg',
          margin: 1,
          width: 120,
          errorCorrectionLevel: 'H', // 30% physical damage/scratch tolerance
          color: { dark: '#0f172a', light: '#ffffff' }
        });
      } catch (err) {
        console.error('Failed generating QR for placard:', placard.id, err);
        qrSvg = `<div style="padding: 1.5rem; color: #ef4444; font-size: 0.75rem;">QR Unavailable</div>`;
      }

      const card = document.createElement('div');
      card.className = 'placard-card';
      card.innerHTML = `
        <div class="placard-card-header">
          <span>${placard.icon}</span>
          <span>${placard.title}</span>
        </div>
        <div class="placard-station-tag">📍 ${placard.station}</div>
        <div class="placard-qr-wrap">${qrSvg}</div>
        <div class="placard-instruction">${placard.instruction}</div>
        <div class="placard-footer-meta" style="font-size: 0.62rem; color: #475569; font-family: var(--font-mono); word-break: break-all;">
          ${placard.targetRoute} &bull; Level H Safe
        </div>
      `;
      placardsSheetGrid.appendChild(card);
    }
  }

  function openPlacardsModal() {
    if (!placardPrintModal) return;
    placardPrintModal.classList.add('open');
    renderPlacardsModal();
  }

  function closePlacardsModal() {
    if (!placardPrintModal) return;
    placardPrintModal.classList.remove('open');
  }

  if (btnOpenPlacardsModal) {
    btnOpenPlacardsModal.addEventListener('click', (e) => {
      e.preventDefault();
      openPlacardsModal();
    });
  }

  if (btnHubOpenPlacards) {
    btnHubOpenPlacards.addEventListener('click', (e) => {
      e.preventDefault();
      openPlacardsModal();
    });
  }

  if (modalPlacardsCloseBtn) {
    modalPlacardsCloseBtn.addEventListener('click', closePlacardsModal);
  }

  if (placardPrintModal) {
    placardPrintModal.addEventListener('click', (e) => {
      if (e.target === placardPrintModal) {
        closePlacardsModal();
      }
    });
  }

  if (btnPrintPlacardsSheet) {
    btnPrintPlacardsSheet.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('printing-placards');
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          document.body.classList.remove('printing-placards');
        }, 1000);
      }, 120);
    });
  }

  // --------------------------------------------------------------------------
  // Live Sanctuary Apps Popup Dropdown
  // --------------------------------------------------------------------------
  const btnOpenAppsDropdown = document.getElementById('btnOpenAppsDropdown');
  const appsDropdownMenu = document.getElementById('appsDropdownMenu');

  function toggleAppsDropdown(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!appsDropdownMenu) return;
    const isOpen = appsDropdownMenu.classList.contains('open');
    if (isOpen) {
      closeAppsDropdown();
    } else {
      openAppsDropdown();
    }
  }

  function openAppsDropdown() {
    if (!appsDropdownMenu) return;
    appsDropdownMenu.classList.add('open');
    if (btnOpenAppsDropdown) {
      btnOpenAppsDropdown.classList.add('active');
      btnOpenAppsDropdown.setAttribute('aria-expanded', 'true');
    }
  }

  function closeAppsDropdown() {
    if (!appsDropdownMenu) return;
    appsDropdownMenu.classList.remove('open');
    if (btnOpenAppsDropdown) {
      btnOpenAppsDropdown.classList.remove('active');
      btnOpenAppsDropdown.setAttribute('aria-expanded', 'false');
    }
  }

  if (btnOpenAppsDropdown) {
    btnOpenAppsDropdown.addEventListener('click', toggleAppsDropdown);
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (appsDropdownMenu && appsDropdownMenu.classList.contains('open')) {
      if (!appsDropdownMenu.contains(e.target) && e.target !== btnOpenAppsDropdown && !btnOpenAppsDropdown.contains(e.target)) {
        closeAppsDropdown();
      }
    }
  });

  // Close modals & dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAppsDropdown();
      closeCaptionsQrModal();
      if (guestQrModal) guestQrModal.classList.remove('open');
      if (channelDetailModal) channelDetailModal.classList.remove('open');
      if (appSettingsModal) closeSettingsModal();
      if (placardPrintModal) closePlacardsModal();
    }
  });

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  renderSosBar();
  renderPopularChips();
  selectScenario('sanctuary-tvs', false);
  renderStageMap();
  renderConsoleLayer('A');
  renderMixBuses();
  updateGuestCalculator();
  renderClickSwitcher(true);
  renderChecklist();
  renderBreakerDirectory();
  renderEmbraceHub();
  generateGuestQRCodes();
  detectLanIp();
  renderLogbook();
  handleHashChange();
});
