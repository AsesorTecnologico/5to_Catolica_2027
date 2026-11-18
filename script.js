// ===================== DATOS ACTUALIZADOS =====================
// 8 TOMOS con 7 CURSOS cada uno
const coursesData = {
    // 7 Cursos (los que solicitaste)
    courses: [
        { id: 1, name: "RAZONAMIENTO ABSTRACTO - RM", description: "Desarrollo de habilidades de razonamiento lógico y abstracto.", icon: "fas fa-brain", color: "#2c3e50" },
        { id: 2, name: "LECTURA COMPRENSIVA", description: "Comprensión y análisis de textos de diversos tipos.", icon: "fas fa-book-open", color: "#c0392b" },
        { id: 3, name: "LECTURA CRITICA", description: "Evaluación y juicio crítico sobre diferentes tipos de textos.", icon: "fas fa-book", color: "#c0392b" },
        { id: 4, name: "LECTURA INTERPRETATIVA", description: "Interpretación profunda y análisis de significado en textos.", icon: "fas fa-check-double", color: "#c0392b" },
        { id: 5, name: "NUMERO OPERACIONES - ALG", description: "Operaciones numéricas y fundamentos algebraicos.", icon: "fas fa-calculator", color: "#2980b9" },
        { id: 6, name: "PLANIMETRIA - TRIG - GMT", description: "Geometría plana, trigonometría y sus aplicaciones.", icon: "fas fa-draw-polygon", color: "#2980b9" },
        { id: 7, name: "ESTADISTICA - ARIT", description: "Estadística descriptiva y fundamentos aritméticos.", icon: "fas fa-chart-bar", color: "#27ae60" }
    ],

    // 8 TOMOS (I al VIII)
    selectors: {
        tomos: [
            { id: "tomo-i", name: "Tomo I", icon: "fas fa-book-open" },
            { id: "tomo-ii", name: "Materiales del Año Lectivo", icon: "fas fa-book-open" },
            { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book-open" },
            { id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book-open" },
            { id: "tomo-v", name: "Tomo V", icon: "fas fa-book-open" },
            { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book-open" },
            { id: "tomo-vii", name: "Tomo VII", icon: "fas fa-book-open" },
            { id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-book-open" }
        ]
    },

    // 🔗 ENLACES DE GOOGLE DRIVE - ESTRUCTURA CORREGIDA
    driveLinks: {
        "tomo-i": {
            2027: {
                1: "https://drive.google.com/drive/folders/15-FRQl8Muc2hZ4C8Ope4v-ihIUE5zlwS?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1TtXw8m4IvcHXv3Wq1-ih2ITs_15uvfBf?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1Nuo5UMEKllPEop_bsmNAGODaeFsRt67x?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1DxVBY59MxbAzSlSzMTTQMgYQ_ZOdJ4Uw?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1yzM61O_WFIjHsK2Tl7hJiuWvtVhN0C42?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1yqbSE-sWTZF4SmYZzmNvFdw1T2tLXLwG?usp=drive_link",
                7: "https://drive.google.com/drive/folders/13ZlKeM2TCxMFdp51WhoodZyza3sbsRV4?usp=drive_link"
            }
        },
        "tomo-ii": {
            2027: {
                1: "https://drive.google.com/drive/folders/1zYXgadRPhq31gCoHx_TLSxpLTSnMLf4R?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1OehOjlHSdKMJjWl4CSikCBKWHjB-KJXK?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1A-FCMcLVsfbFw3J3urHxUIru7ddGOLyp?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1fqEqck4NtR4epNXls68sdltNsURQRHD-?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1pW0ejrkSeWF6P8Ms1KFd-HIKrxl6Buav?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1KTF86YzSmkysaZo5I0cSx8p50YIRoHLc?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1tNprbybyud_EnRJqF3L_7H70s6435tRD?usp=drive_link"
            }
        },
        "tomo-iii": {
            2027: {
                1: "https://drive.google.com/drive/folders/1TFKddm_2X_HgB0f9RSlnKUOz0iVKgDrJ?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1m3FL1yP5W-nr43XvTAB8N4lq7-fOflKg?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1u5ywoYCz6bmrl3bUOyaAIFxqua_cW08O?usp=drive_link",
                4: "https://drive.google.com/drive/folders/11ZqWyd9NXvlQsXIcGOg37e4Bsn0hOo5u?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1FtP3Tc_gGX_tgzgtvpyX5Z8lE3nEvdYj?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1JuZ9Ah0WJ0a7nB1cdRG3Os8jKddzkFPF?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1fTUXPJVL2SlJ11XNxK_PGU4RyBOGLjrB?usp=drive_link"
            }
        },
        "tomo-iv": {
            2027: {
                1: "https://drive.google.com/drive/folders/1kDr9knvhKTQGybbjIW74bTdSLlnQXBwQ?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1eAOLToIsRlJEipQyX1FTZZY6-ksYcroX?usp=drive_link",
                3: "https://drive.google.com/drive/folders/14sZBsvxodgHN164Qm8qXoSMht7pe5xEP?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1zqXCe342bTla5egsho0O0qaNT0aD8VZ0?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1AVnmy4H0HPP2QYt1swoxsousom_Hggvf?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1aKXhEYGos7fFBRLGLgXWPVJReAWGuhZT?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1uW3l70Jrf9zyV_eIhDY_6PHVRk215pYr?usp=drive_link"
            }
        },
        "tomo-v": {
            2027: {
                1: "https://drive.google.com/drive/folders/1f8yjtML52NZFcErItt60YU4D1y4GiVBh?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1b4G2ofIHa76mwhDO9IMt82mQnsw0Z3Ra?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1WbyTOB3PDMLDbJM0nbGH2XeVbkiUlAAz?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1F5PJu4sUtoBR_GGglo7gatXStoOU84uv?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1M0jnhaxNRRWc8vWql1WuuSUxHN297H7t?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1dOzG2jNDgXBRdBkUJBXojeDVl0AACrPG?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1_Frs3tFXg5xXEN9t35Z7wmlJ7RPTndEC?usp=drive_link"
            }
        },
        "tomo-vi": {
            2027: {
                1: "https://drive.google.com/drive/folders/1DczMG4QLcIXlSgEHBDZdLJHrs7-R5G6N?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1k856VADMx7mcuM46qmYI6QFuweHTZyHp?usp=drive_link",
                3: "https://drive.google.com/drive/folders/19FR-q6Z8udCqWEfaL8ndglaz8MqtJoE6?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1W6Ehx5b9RNmem0k52XFpCEMaSotp_Ayd?usp=drive_link",
                5: "https://drive.google.com/drive/folders/12xKQdSIzhZ7mlOhm-BeSPlQ48BzQzh01?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1y_gp98tbbfEancAhFZzDqI-9w_Vt6keI?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1gFPLSHarFs05IS5Uoj9l4MM6mqoMeh2d?usp=drive_link"
            }
        },
        "tomo-vii": {
            2027: {
                1: "https://drive.google.com/drive/folders/1t8EuUaw6nRKdRLiX2yuxv_DsoeRqvMVo?usp=drive_link",
                2: "https://drive.google.com/drive/folders/1j2X7dxlPIw_ubuhjIV9FJ5vbEuPBnb8_?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1mHrrvjM_Ao5gm-J4C8xKqtOO6SvCinNe?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1_Sc_Lpc08y16jafoJlmB0wHfBY7gcBTC?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1JuP6JL8BGfz9MqMLxCj4RYZgHRZDQq6w?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1by1b-zAsUb6zcuuDJgPunrwnm-gH46XJ?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1FPSOlKEoTcsbh4DLFTvdSiPeSw27EsXE?usp=drive_link"
            }
        },
        "tomo-viii": {
            2027: {
                1: "https://drive.google.com/drive/folders/1Oip6Wy4A0y42TQSKm-DVYlHrtTuoC-vt?usp=drive_link",
                2: "https://drive.google.com/drive/folders/14a6T9oQ-5cnQW5fzZw79RHSpqTedKcZ4?usp=drive_link",
                3: "https://drive.google.com/drive/folders/1Vn0kGAMjrt3BJ6hgYzBSacuz4HirqAbh?usp=drive_link",
                4: "https://drive.google.com/drive/folders/1jPlZ1Y6siSPdbBAxTYQ6HhW2oD0XXD53?usp=drive_link",
                5: "https://drive.google.com/drive/folders/1cXLiGBpWnCL6Rb-S7m5133awTtENbb0x?usp=drive_link",
                6: "https://drive.google.com/drive/folders/1-OHEU17MWnGRxCJSUGk8msJRG_r-omX8?usp=drive_link",
                7: "https://drive.google.com/drive/folders/1n68FI5sECLKPibLbCpkNCFZ5grXsi90r?usp=drive_link"
            }
        }
    }
};

// Estado global
let currentYear = 2027;
let currentSelector = "tomo-i";

// ========== FUNCIONES PRINCIPALES ==========
function generateSelectorButtons() {
    const container = document.getElementById('tomo-buttons');
    container.innerHTML = '';
    coursesData.selectors.tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => changeSelector(tomo.id));
        container.appendChild(btn);
    });
}

function updateCurrentSelectorUI() {
    const selectorEl = document.getElementById('current-selector');
    const tomo = coursesData.selectors.tomos.find(t => t.id === currentSelector);
    const tomoName = tomo ? tomo.name : "Tomo I";
    selectorEl.innerHTML = `<i class="fas fa-book"></i><span>${tomoName} - Año ${currentYear}</span>`;
}

function generateCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    const yearLinks = coursesData.driveLinks[currentSelector]?.[currentYear] || {};
    document.getElementById('courses-count').textContent = coursesData.courses.length;
    
    coursesData.courses.forEach((course) => {
        const link = yearLinks[course.id] || "#";
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="selector-tag">${currentSelector.replace('tomo-', 'Tomo ').toUpperCase()}</div>
            <div class="year-tag">${currentYear}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        container.appendChild(card);
    });
    document.getElementById('current-year').textContent = currentYear;
    updateCurrentSelectorUI();
}

function changeSelector(selectorId) {
    currentSelector = selectorId;
    document.querySelectorAll('.selector-btn').forEach(btn => {
        if (btn.dataset.id === selectorId) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    generateCourses();
}

function changeYear(year) {
    currentYear = year;
    document.querySelectorAll('.tab').forEach(tab => {
        if (parseInt(tab.dataset.year) === year) tab.classList.add('active');
        else tab.classList.remove('active');
    });
    generateCourses();
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    generateSelectorButtons();
    generateCourses();
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => changeYear(parseInt(tab.dataset.year)));
    });
    
    setTimeout(() => { document.body.style.opacity = 1; }, 100);
});
