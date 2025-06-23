// Application state and data
const APP_STATE = {
  artworks: [], // This will be populated dynamically.
  useCharacterImages: false, // Default to using placeholder sprites
  characterImagePaths: {
    students: [
      'assets/foreground/girl-3.png',
      'assets/foreground/boy-2.png',
      'assets/foreground/girl-2.png',
      'assets/foreground/boy.png',
      'assets/foreground/girl.png'
    ],
    instructor: 'assets/main-object/idle.png',
    instructorTalking: [
      'assets/main-object/talking-1.png',
      'assets/main-object/talking-2.png',
      'assets/main-object/talking-3.png'
    ]
  },
  placeholderArtworks: [
    {
      id: 1,
      name: "Placeholder Artwork 1",
      artist: "Artist One",
      year: "2024",
      image: "#ffb7b2",
      pixels: `
      ..............
      ..............
      ....####......
      ...#$$$$#.....
      ..#$$$$$$#....
      ..#$$@$$@#....
      ..#$$$$$$#....
      ...#$$$$#.....
      ....#$$#......
      .....##.......
      ..............`,
      facts: [
        "This artwork represents the first of our collection, showcasing basic pixel art techniques.",
        "The artist used a limited color palette to create depth and dimension.",
        "Notice how the simple shapes create a recognizable form through abstraction.",
        "The composition follows the rule of thirds, creating visual balance.",
        "This piece demonstrates how pixel art can convey emotion through minimal elements."
      ]
    },
    {
      id: 2,
      name: "Placeholder Artwork 2",
      artist: "Artist Two",
      year: "2024",
      image: "#c7ceea",
      pixels: `
      .###..#.....##
      #***##***#.##*
      #*****######**
      .#***********#
      ##***##*******
      #****#..####..
      #####...#..#..
      #...#...#..#..
      #...#...####..
      #####..........`,
      facts: [
        "This piece explores the relationship between light and shadow in pixel art.",
        "The artist used a technique called dithering to create smooth gradients.",
        "The composition creates a sense of movement through diagonal lines.",
        "Notice how the negative space contributes to the overall balance.",
        "This artwork demonstrates advanced pixel art shading techniques."
      ]
    },
    {
      id: 3,
      name: "Placeholder Artwork 3",
      artist: "Artist Three",
      year: "2024",
      image: "#ffdac1",
      pixels: `
      ...####...###.
      ..#%%%%#.#%%%.
      .#%%%%%%#%%%%.
      .#%@@%%@#%%%%.
      .#%%%%%%#%%%%.
      ..#%O%%O#%%%%.
      ...####.#%%%%.
      ........#%%%%.
      .......#%%%%%.
      ......#%%%%%%.`,
      facts: [
        "This artwork showcases the use of color theory in pixel art.",
        "The artist created depth through careful color selection.",
        "The piece demonstrates how to create texture using pixel patterns.",
        "Notice how the composition guides the viewer's eye.",
        "This work shows how pixel art can create complex forms from simple shapes."
      ]
    },
    {
      id: 4,
      name: "Placeholder Artwork 4",
      artist: "Artist Four",
      year: "2024",
      image: "#e2f0cb",
      pixels: `
      ....###.......
      ...#%%%#......
      ..#%%%%%#.....
      .#%%%@%%%#....
      .#%%%%%%%%#...
      .#%%%O%%%%#...
      ..#%%%%%%%#...
      ...#%%%%%#....
      ....###%%#....
      .......##.....`,
      facts: [
        "This piece demonstrates the importance of silhouette in pixel art.",
        "The artist used contrast to create focal points.",
        "Notice how the limited color palette creates harmony.",
        "The composition shows mastery of pixel art fundamentals.",
        "This artwork illustrates how to create depth in a 2D medium."
      ]
    },
    {
      id: 5,
      name: "Placeholder Artwork 5",
      artist: "Artist Five",
      year: "2024",
      image: "#b5ead7",
      pixels: `
      ...........##.
      .#.......##%%#
      #%#....##%%%%#
      #%%##.#%%%%%#.
      .#%%%#%%%%%#..
      ..#%%%%%%%%#..
      ...#%%%%%#....
      ....###.......
      ..............
      ..............`,
      facts: [
        "This artwork explores the concept of minimalism in pixel art.",
        "The artist used negative space effectively to create form.",
        "Notice how the simple shapes create a complex narrative.",
        "The piece demonstrates the power of restraint in pixel art.",
        "This work shows how to create impact with limited elements."
      ]
    },
    {
      id: 6,
      name: "Placeholder Artwork 6",
      artist: "Artist Six",
      year: "2024",
      image: "#8a5cf5",
      pixels: `
      .#.............
      #%#......###...
      #%%#....#%%%#..
      .#%%#..#%%%%%#.
      .#%%%##%%%%%%%#
      ..#%%%%%%%%%%#.
      ...#%%%%%%%%#..
      ....########...
      ..............
      ..............`,
      facts: [
        "This piece showcases advanced pixel art animation techniques.",
        "The artist created movement through careful pixel placement.",
        "Notice how the composition creates a sense of flow.",
        "The work demonstrates how to create texture in pixel art.",
        "This artwork shows the importance of pixel-perfect placement."
      ]
    },
    {
      id: 7,
      name: "Placeholder Artwork 7",
      artist: "Artist Seven",
      year: "2024",
      image: "#ff5e7d",
      pixels: `
      ...###.###....
      ..#%%%#%%%#...
      .#%%@%#%@%%#..
      .#%%%%%O%%%#..
      .#%%%%%%%%%%#.
      ..#%%%%%%%%#..
      ...#%%%%%%#...
      ....######....
      ...#......#...
      ..#........#..`,
      facts: [
        "This artwork demonstrates the use of perspective in pixel art.",
        "The artist created depth through careful shading.",
        "Notice how the composition creates a sense of space.",
        "The piece shows how to create atmosphere in pixel art.",
        "This work illustrates the importance of lighting in pixel art."
      ]
    },
    {
      id: 8,
      name: "Placeholder Artwork 8",
      artist: "Artist Eight",
      year: "2024",
      image: "#ffb7b2",
      pixels: `
      ..............
      ..............
      ....####......
      ...#$$$$#.....
      ..#$$$$$$#....
      ..#$$@$$@#....
      ..#$$$$$$#....
      ...#$$$$#.....
      ....#$$#......
      .....##.......
      ..............`,
      facts: [
        "This piece explores the relationship between form and function.",
        "The artist used color to create emotional impact.",
        "Notice how the composition creates visual rhythm.",
        "The work demonstrates how to create texture through pixels.",
        "This artwork shows the importance of planning in pixel art."
      ]
    },
    {
      id: 9,
      name: "Placeholder Artwork 9",
      artist: "Artist Nine",
      year: "2024",
      image: "#c7ceea",
      pixels: `
      .###..#.....##
      #***##***#.##*
      #*****######**
      .#***********#
      ##***##*******
      #****#..####..
      #####...#..#..
      #...#...#..#..
      #...#...####..
      #####..........`,
      facts: [
        "This artwork showcases the use of color harmony in pixel art.",
        "The artist created depth through careful color selection.",
        "Notice how the composition creates visual interest.",
        "The piece demonstrates how to create mood in pixel art.",
        "This work shows the importance of color theory in pixel art."
      ]
    },
    {
      id: 10,
      name: "Placeholder Artwork 10",
      artist: "Artist Ten",
      year: "2024",
      image: "#ffdac1",
      pixels: `
      ...####...###.
      ..#%%%%#.#%%%.
      .#%%%%%%#%%%%.
      .#%@@%%@#%%%%.
      .#%%%%%%#%%%%.
      ..#%O%%O#%%%%.
      ...####.#%%%%.
      ........#%%%%.
      .......#%%%%%.
      ......#%%%%%%.`,
      facts: [
        "This piece demonstrates the power of simplicity in pixel art.",
        "The artist used minimal elements to create maximum impact.",
        "Notice how the composition creates visual balance.",
        "The work shows how to create atmosphere with limited colors.",
        "This artwork illustrates the importance of pixel placement."
      ]
    }
  ],
  currentFactIndex: 0,
  instructorSprites: {
    neutral: {
      color: "#555", // Placeholder for neutral expression
      pixels: `
      ....####....
      ...#$$$$#...
      ..#$$$$$$#..
      ..#$@##@$#..
      ..#$$$$$$#..
      ...#$--$#...
      ....#$$#....
      ...##$$##...
      ..#$$$$$$#..
      .#$$$$$$$$#.
      .#$$$$$$$$#.
      .#$$#$$#$$#.
      .#$$$$$$$$#.
      ..#$$$$$$#..
      ...#$$$$#...
      ...#$##$#...
      ...#$##$#...
      ..#$$##$$#..
      .#$$#..#$$#.
      ##$#....#$##`
    },
    happy: {
      color: "#7cb342", // Placeholder for happy expression
      pixels: `
      ....####....
      ...#$$$$#...
      ..#$$$$$$#..
      ..#$@##@$#..
      ..#$$$$$$#..
      ...#$UU$#...
      ....#$$#....
      ...##$$##...
      ..#$$$$$$#..
      .#$$$$$$$$#.
      .#$$$$$$$$#.
      .#$$#$$#$$#.
      .#$$$$$$$$#.
      ..#$$$$$$#..
      ...#$$$$#...
      ...#$##$#...
      ...#$##$#...
      ..#$$##$$#..
      .#$$#..#$$#.
      ##$#....#$##`
    },
    surprised: {
      color: "#ffa000", // Placeholder for surprised expression
      pixels: `
      ....####....
      ...#$$$$#...
      ..#$$$$$$#..
      ..#$@##@$#..
      ..#$$$$$$#..
      ...#$OO$#...
      ....#$$#....
      ...##$$##...
      ..#$$$$$$#..
      .#$$$$$$$$#.
      .#$$$$$$$$#.
      .#$$#$$#$$#.
      .#$$$$$$$$#.
      ..#$$$$$$#..
      ...#$$$$#...
      ...#$##$#...
      ...#$##$#...
      ..#$$##$$#..
      .#$$#..#$$#.
      ##$#....#$##`
    },
    pointing: {
      color: "#5d4037", // Placeholder for pointing expression
      pixels: `
      ....####....
      ...#$$$$#...
      ..#$$$$$$#..
      ..#$@##@$#..
      ..#$$$$$$#..
      ...#$--$#...
      ....#$$#....
      ...##$$##...
      ..#$$$$$$#..
      .#$$$$$$$$#.
      .#$$$$$$$$##
      .#$$#$$#$$$#
      .#$$$$$$$$$#
      ..#$$$$$$$#.
      ...#$$$$$$#.
      ...#$##$$$#.
      ...#$##$$$#.
      ..#$$##$$$#.
      .#$$#..###..
      ##$#........`
    }
  },
  studentSprites: [
    { color: "#795548", hair: "#3e2723" },
    { color: "#5d4037", hair: "#4e342e" },
    { color: "#8d6e63", hair: "#6d4c41" },
    { color: "#a1887f", hair: "#795548" },
    { color: "#bcaaa4", hair: "#8d6e63" }
  ],
  currentArtworkIndex: -1,
  artworkHistory: [],
  historyPosition: -1,
  isMuted: false,
  isInfoPanelVisible: false,
  isThemeDark: true,
  audioVolume: 0.5,
  isFullscreen: false
};

// Audio samples - using simple AudioBuffer for placeholders
const AUDIO_SAMPLES = {
  click: { frequency: 880, duration: 0.1 },
  success: { frequency: 440, duration: 0.2, type: 'triangle' },
  error: { frequency: 220, duration: 0.3, type: 'sawtooth' },
  hover: { frequency: 1200, duration: 0.05 },
  next: { frequency: 660, duration: 0.1, type: 'triangle' },
  speech: { frequency: 330, duration: 0.15, type: 'sine' },
  ambience: { url: 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/////////////////////////////////AAAAAExhdmM1OC4xMy4xMDAAAAAAAAAAAAAAAAD/4zLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAABgsABJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUmEhISEhISEhISEhISEhISEhISEhISEhISEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vP////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAZJAAAAAAAAYLBJWlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAANQAbGeUEQAAJ3gBjP6EQAAAJOD5R0HygIAmD5+sEHLx+XjAABBHz9YIPnw+XhAwCIPn6wQfPh8uCAMvpAgZeICAoBlwQMvHxAQBAMuD5l4gICAgCYPnxAy8QEBAEATPh8y8QEBQDAIPnwQMvEBAUAwBMHz4IGXiAgJ8NbMmFvcgBMMGjJT5Y3AZewzcD3/Xb53ne91vMQBAyZP1NolJCdFIlC0QkDJlNolPYY3AZ+wz8D/vXv+d53vdb0M/YaQR//3vbdX4Z+w0hP/+MYxBkcMeLGeUEYAMaQn+973W8xAMeGfL1NolJDf2MFQM+XqbQ7BJDHxkaAz5eptDsEnO3WhoDLhmy9TaJSQ39jBYfFXqbRKSG/sYLAZcM/XqcRKVFvYwVAz5eptDsEmMaGRoDPhny9TaHYJMY0MjQXDAEK9TaJSQ39jBYDLhny9TaJSQ39jBYAGXqbRKVFfYwcAz5eptDsEkMfGRoDPhny9//+MYxCkUWWa+WYIwAMkw0NDQGfL1NodgkxjQyNAZ8M+XqbQ7BJjGhkaAz4Z8vU2h2CTGNDQy+YMZHS1KjkdJrR9HyL1i7i9D5YxkdLUpOR0mtI0fJvWLuL0PijGR0tSk5HSa0jQ8m9Yu4vQ+iMZHT1KjkdJrR9HyMVi7i9D5IxkdPUqOQ0mtH0fIxWLuL0BvU0SmIFTQ7AWR3tOJkQonW6tSRKYgVNJsBZHa04mRCidbq1JEpiBU0OwFkd7UZEKJxurUkSmIlTQ7AWR3tOJkQon/+MYxEcZkWa6OcE4AMna6tSRKYgVNJsBZHe1GRCidbq1REpiBU0mwFkd7TiZEKJxurUkSmIFTSbAWR3tOJkQonG6tSRKYgVNJsBZHe04mRCidbq1JEpiBU0mwFkd7UZEKJxurUkSmIFTSbAWR3tRkQonG6tSRKYgVNJsBZHe04mRCidbq1JEpiBU0mwFkd7TiZEKJxurUkSmIFTSbAWR3tOJkQonW6tSRKYgVNJsBZHe1GRCidbq1JEpiBU0mwFkd7UZEKJxurUkSmIFTSbAWR3tRkQonG6tSRKYgVNJsBZHe04mRCidbq1JEpiBU0mwAAAAAAAAAAAAAAAAAA=' }
};

// DOM Elements
const elements = {
  loadingScreen: document.getElementById('loadingScreen'),
  loadingText: document.getElementById('loadingText'),
  disclaimerPanel: document.getElementById('disclaimerPanel'),
  proceedBtn: document.getElementById('proceedBtn'),
  artworkDisplay: document.getElementById('artworkDisplay'),
  speechBubble: document.getElementById('speechBubble'),
  speechText: document.getElementById('speechText'),
  instructor: document.getElementById('instructor'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  randomBtn: document.getElementById('randomBtn'),
  refreshBtn: document.getElementById('refreshBtn'),
  infoBtn: document.getElementById('infoBtn'),
  muteBtn: document.getElementById('muteBtn'),
  soundIcon: document.getElementById('soundIcon'),
  progressFill: document.getElementById('progressFill'),
  infoPanel: document.getElementById('infoPanel'),
  artworkThumb: document.getElementById('artworkThumb'),
  artworkTitle: document.getElementById('artworkTitle'),
  artworkArtist: document.getElementById('artworkArtist'),
  artworkYear: document.getElementById('artworkYear'),
  artworkFact: document.getElementById('artworkFact'),
  themeToggle: document.getElementById('themeToggle'),
  fullscreenBtn: document.getElementById('fullscreenBtn'),
  closeInfoBtn: document.getElementById('closeInfoBtn'),
  modalOverlay: document.getElementById('modalOverlay'),
  infoBtnTop:     document.getElementById('infoBtnTop'),
  groupPanel: document.getElementById('groupPanel'),
  closeGroupBtn: document.getElementById('closeGroupBtn'),
  students: [
    document.getElementById('student1'),
    document.getElementById('student2'),
    document.getElementById('student3'),
    document.getElementById('student4'),
    document.getElementById('student5')
  ]
};

// Audio context and sounds
let audioContext;
const sounds = {};
let backgroundAudio;
let backgroundGainNode;
let instructorAnimationInterval = null;

// This new function checks if all character images can be loaded.
async function loadCharacterAssets() {
  const allPaths = [
    ...APP_STATE.characterImagePaths.students,
    APP_STATE.characterImagePaths.instructor,
    ...APP_STATE.characterImagePaths.instructorTalking
  ];
  try {
    const imagePromises = allPaths.map(path => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load character image: ${path}`));
        img.src = path;
      });
    });
    await Promise.all(imagePromises);
    APP_STATE.useCharacterImages = true; // Success! Use real images.
    console.log("Successfully loaded all character PNGs.");
  } catch (error) {
    APP_STATE.useCharacterImages = false; // Failure. Use placeholders.
    console.warn(`${error.message}. Using placeholder sprites instead.`);
  }
}

// This new validation function checks if all image paths in the artwork data are valid.
async function validateImagePaths(artworks) {
  const imagePromises = artworks.map(artwork => {
    return new Promise((resolve, reject) => {
      // We only need to validate artworks that have an `image` path.
      // Placeholders with `pixels` are considered valid by default.
      if (!artwork.image || artwork.pixels) {
        resolve();
        return;
      }
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${artwork.image}`));
      img.src = artwork.image;
    });
  });
  // This will fail as soon as a single image promise rejects.
  return Promise.all(imagePromises);
}

// This function will handle loading the artwork data.
async function loadArtworkData() {
  try {
    const response = await fetch('assets/json/artworks.json');
    if (!response.ok) {
      throw new Error('JSON file not found.');
    }
    const data = await response.json();
    
    // New step: Validate that all images referenced in the JSON are accessible.
    await validateImagePaths(data);

    // If validation succeeds, use the data from the JSON file.
    APP_STATE.artworks = data;
    console.log("Successfully loaded and validated artwork data from assets/json/artworks.json");

  } catch (error) {
    // This block now catches both JSON fetch errors and image loading errors.
    console.warn(`Could not load external artworks: ${error.message}. Using placeholder data instead.`);
    APP_STATE.artworks = APP_STATE.placeholderArtworks;
  }
}

// Initialize application. It remains async to wait for the data.
async function initApp() {
  // First, load all external assets and decide which set to use.
  await loadArtworkData();
  await loadCharacterAssets();

  // Then continue with the rest of the setup.
  simulateLoading()
    .then(() => {
      // Trigger the scene entrance animation by removing the loading class
      document.querySelector('.app-container').classList.remove('scene-loading');

      setupClassroom();
      setupEventListeners();
      
      // Delay the first artwork display until after the whiteboard has animated in.
      // The whiteboard animation is defined by: `transition: transform 0.8s ease 0.5s...`
      // So it starts after 0.5s and ends at 1.3s. Let's start our animation at 1.3s.
      setTimeout(() => {
        displayArtworkByIndex(0);
      }, 1300); 

      startIdleAnimations();
      animateStudents();
      window.addEventListener('resize', handleResize);
      handleResize();
      
      // Start showing tips after the main scene animation is complete
      setTimeout(showTips, 2500);
    })
    .catch(error => console.error('Initialization error:', error));
}

// Set up classroom elements
function setupClassroom() {
  if (APP_STATE.useCharacterImages) {
    // If real images were loaded, use them.
    elements.students.forEach((studentEl, index) => {
      studentEl.innerHTML = `<img src="${APP_STATE.characterImagePaths.students[index]}" alt="Student ${index + 1}">`;
    });
    elements.instructor.innerHTML = `<img src="${APP_STATE.characterImagePaths.instructor}" alt="Instructor">`;
    elements.instructor.classList.add('image-idle'); // Add idle animation
  } else {
    // Otherwise, render the placeholder sprites.
    elements.students.forEach((student, index) => {
      const studentData = APP_STATE.studentSprites[index];
      student.style.backgroundColor = studentData.color;

      // Create student hair element
      const studentHair = document.createElement('div');
      studentHair.style.position = 'absolute';
      studentHair.style.top = '0';
      studentHair.style.left = '0';
      studentHair.style.width = '100%';
      studentHair.style.height = '40%';
      studentHair.style.backgroundColor = studentData.hair;
      studentHair.style.borderRadius = '50% 50% 0 0';
      student.appendChild(studentHair);
    });
    renderInstructorSprite('neutral');
  }
}

// Simulate loading assets with a progress bar and wait for user interaction
function simulateLoading() {
  return new Promise(resolve => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25; // Faster loading simulation
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Loading is complete, now wait for the user to start the app.
        elements.loadingText.innerHTML = 'Click to Start';
        elements.loadingScreen.classList.add('ready');

        const showDisclaimer = () => {
          // Add class to trigger animations for hiding loading text/art
          elements.loadingScreen.classList.add('show-disclaimer');
          // Show the disclaimer panel
          elements.disclaimerPanel.style.display = 'flex';

          // Listen for a click on the proceed button
          elements.proceedBtn.addEventListener('click', () => {
            // This click serves as the user gesture to unlock audio.
            initAudio();
            elements.loadingScreen.classList.add('fade-out');

            setTimeout(() => {
              elements.loadingScreen.style.display = 'none'; // Remove from layout
              resolve(); // Continue with app initialization
            }, 1000); // Match fade-out duration
          }, { once: true });
        };
        
        // Listen for the initial click on the loading screen to show the disclaimer
        elements.loadingScreen.addEventListener('click', showDisclaimer, { once: true });
      }
    }, 300);
  });
}

// Set up event listeners
function setupEventListeners() {
  // Artwork interaction
  elements.artworkDisplay.addEventListener('click', handleArtworkClick);
  elements.artworkDisplay.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleArtworkClick();
    }
  });

  // Control buttons
  elements.prevBtn.addEventListener('click', handlePrevClick);
  elements.nextBtn.addEventListener('click', handleNextClick);
  elements.randomBtn.addEventListener('click', handleRandomClick);
  elements.refreshBtn.addEventListener('click', handleRefreshClick);
  elements.infoBtn.addEventListener('click', toggleInfoPanel);
  elements.closeInfoBtn.addEventListener('click', closeInfoPanel);
  elements.muteBtn.addEventListener('click', toggleMute);

  // Modal overlay
  elements.modalOverlay.addEventListener('click', event => {
    if (event.target === elements.modalOverlay) {
      closeInfoPanel();
      elements.groupPanel.style.display = 'none';
      elements.modalOverlay.classList.remove('active');
    }
  });

  // Open “Group Members” modal
  elements.infoBtnTop.addEventListener('click', () => {
    // hide the artwork info if it happens to be open
    elements.infoPanel.style.display = 'none';

    // show the group list
    elements.groupPanel.style.display = 'block';
    elements.modalOverlay.classList.add('active');
    playSound('click');
  });

  // Close “Group Members” modal
  elements.closeGroupBtn.addEventListener('click', () => {
    elements.groupPanel.style.display = 'none';
    elements.modalOverlay.classList.remove('active');
    playSound('click');
  });

  // Add a global click listener to close the speech bubble
  document.addEventListener('click', handleGlobalClick);
}

// Handle clicks outside the main interactive elements to close the speech bubble
function handleGlobalClick(event) {
  // If the speech bubble is visible...
  if (!elements.speechBubble.classList.contains('hidden')) {
    // Define all the 'safe' areas where a click should NOT close the bubble
    const isArtworkClick = elements.artworkDisplay.contains(event.target);
    const isControlClick = event.target.closest('.control-btn');
    const isThemeClick = elements.themeToggle.contains(event.target);
    const isFullscreenClick = elements.fullscreenBtn.contains(event.target);
    const isModalInteraction = elements.modalOverlay.contains(event.target);

    // If the click wasn't on any of the safe zones, hide the bubble.
    if (!isArtworkClick && !isControlClick && !isThemeClick && !isFullscreenClick && !isModalInteraction) {
      hideSpeechBubble();
    }
  }
}

// Handle window resize
function handleResize() {
  // Calculate the scale factor based on window size
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Base dimensions of our scene
  const baseWidth = 320;
  const baseHeight = 180;

  // Calculate scale to fit screen while maintaining aspect ratio
  let scale = Math.min(
    windowWidth / baseWidth,
    windowHeight / baseHeight
  );

  // Round to nearest 0.5 to keep pixel sharpness
  scale = Math.floor(scale * 2) / 2;

  // Update the CSS variable for pixel scale
  document.documentElement.style.setProperty('--pixel-scale', scale);
}

// Initialize audio context and load sounds
function initAudio() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create master gain node for volume control
    const masterGain = audioContext.createGain();
    masterGain.gain.value = APP_STATE.audioVolume;
    masterGain.connect(audioContext.destination);

    // Load sound effects
    Object.keys(AUDIO_SAMPLES).forEach(key => {
      if (key === 'ambience') {
        loadAmbienceSound(AUDIO_SAMPLES[key].url, masterGain);
      } else {
        sounds[key] = createTone(
          AUDIO_SAMPLES[key].frequency,
          AUDIO_SAMPLES[key].duration,
          AUDIO_SAMPLES[key].type || 'sine',
          masterGain
        );
      }
    });

  } catch (error) {
    console.error('Web Audio API is not supported in this browser.', error);
  }
}

// Load ambient background sound
function loadAmbienceSound(base64Url, masterGain) {
  try {
    const audio = new Audio(base64Url);
    audio.loop = true;

    if (audioContext) {
      backgroundAudio = audio;
      const source = audioContext.createMediaElementSource(audio);
      backgroundGainNode = audioContext.createGain();
      backgroundGainNode.gain.value = 0.2; // Lower volume for background

      source.connect(backgroundGainNode);
      backgroundGainNode.connect(masterGain);

      // Start playing with low volume
      if (!APP_STATE.isMuted) {
        audio.play().catch(e => console.log('Autoplay prevented:', e));
      }
    }
  } catch (error) {
    console.error('Error loading ambience sound:', error);
  }
}

// Create a tone generator for sound effects
function createTone(frequency, duration, type, masterGain) {
  return () => {
    if (!audioContext || APP_STATE.isMuted) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(masterGain);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  };
}

// Play a sound by name
function playSound(name) {
  if (sounds[name] && !APP_STATE.isMuted) {
    sounds[name]();
  }
}

// Render a pixel art sprite from ASCII representation
function renderPixelArt(container, pixelData, baseColor) {
  // Clear previous content
  container.innerHTML = '';
  container.style.backgroundColor = 'transparent';

  // Parse the pixel art string
  const rows = pixelData.trim().split('\n');
  const width = Math.max(...rows.map(row => row.trim().length));
  const height = rows.length;

  // Create a canvas for rendering
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.className = 'pixel-art';
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // Color mapping for different symbols
  const colorMap = {
    '#': '#000000', // Black outline
    '$': baseColor, // Main color
    '@': '#000000', // Eyes
    '-': '#000000', // Mouth
    'O': '#000000', // Open mouth
    'U': '#000000', // Smile
    '*': '#FFD700', // Gold/yellow
    '%': baseColor, // Fill color
    '.': 'transparent' // Transparent
  };

  // Draw each pixel
  for (let y = 0; y < height; y++) {
    const row = rows[y].trim();
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      const color = colorMap[char] || 'transparent';

      if (color !== 'transparent') {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  container.appendChild(canvas);
}

// Render instructor sprite with given expression
function renderInstructorSprite(expression) {
  if (APP_STATE.useCharacterImages) return; // This function is for placeholders only
  const sprite = APP_STATE.instructorSprites[expression];
  if (sprite) {
    renderPixelArt(elements.instructor, sprite.pixels, sprite.color);
  }
}

// This new function can render both real images and placeholders.
function renderImageOrPixels(container, artwork) {
  container.innerHTML = ''; // Clear previous content first.

  // Check if the artwork is a placeholder (has 'pixels' property).
  if (artwork.pixels) {
    renderPixelArt(container, artwork.pixels, artwork.image);
  }
  // Otherwise, it's a real artwork with an image path.
  else if (artwork.image) {
    const img = document.createElement('img');
    img.src = artwork.image;
    img.alt = artwork.name;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.className = 'pixel-art'; // Keep the crisp rendering style.
    container.appendChild(img);
  }
}

// Update the original render functions to use the new versatile renderer.
function renderArtwork(artwork) {
  renderImageOrPixels(elements.artworkDisplay, artwork);
}

// Handle artwork click
function handleArtworkClick() {
  if (APP_STATE.currentArtworkIndex >= 0) {
    const artwork = APP_STATE.artworks[APP_STATE.currentArtworkIndex];
    
    // Cycle through facts
    APP_STATE.currentFactIndex = (APP_STATE.currentFactIndex + 1) % artwork.facts.length;
    const fact = artwork.facts[APP_STATE.currentFactIndex];

    // Show speech bubble with the fact
    showSpeechBubble(fact);

    if (!APP_STATE.useCharacterImages) {
      // Change instructor expression randomly between happy, pointing, or surprised
      const expressions = ['happy', 'pointing', 'surprised'];
      const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];
      renderInstructorSprite(randomExpression);
    }

    // Add active class to artwork
    elements.artworkDisplay.classList.add('active');

    // Play speech sound
    playSound('speech');

    // Slight bounce animation for instructor
    elements.instructor.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      elements.instructor.style.transform = 'translateY(0)';
    }, 300);
  }
}

// Show speech bubble with text
function showSpeechBubble(text) {
  // Clear any existing timeout
  if (window.speechTimeout) clearTimeout(window.speechTimeout);

  // Set the text content
  elements.speechText.textContent = text;

  // Show the bubble with animation
  elements.speechBubble.classList.remove('hidden');

  if (APP_STATE.useCharacterImages) {
    startInstructorTalkingAnimation();
  }

  // Auto-hide after a delay
  window.speechTimeout = setTimeout(hideSpeechBubble, 8000);
}

// Hide speech bubble
function hideSpeechBubble() {
  elements.speechBubble.classList.add('hidden');
  elements.artworkDisplay.classList.remove('active');

  if (APP_STATE.useCharacterImages) {
    stopInstructorTalkingAnimation();
  } else {
    // Reset placeholder instructor to neutral expression
    setTimeout(() => {
      renderInstructorSprite('neutral');
    }, 300);
  }
}

// Display artwork by index - simplified version
function displayArtworkByIndex(index) {
    // Guard clause: do nothing if the index is invalid or already displayed
    if (index < 0 || index >= APP_STATE.artworks.length || index === APP_STATE.currentArtworkIndex) return;

    const artworkContainer = elements.artworkDisplay;
    const currentArtworkElement = artworkContainer.children[0];
    const isInitialLoad = !currentArtworkElement;

    const transitionDuration = 250; // A faster transition, as requested

    const showNewArtwork = () => {
        // Update state and UI content
        APP_STATE.currentArtworkIndex = index;
        APP_STATE.currentFactIndex = 0;
        const artwork = APP_STATE.artworks[index];

        renderArtwork(artwork); // This replaces the content of artworkContainer

        const newArtworkElement = artworkContainer.children[0];

        if (newArtworkElement) {
            if (isInitialLoad) {
                // A unique, gentle entrance for the very first artwork
                newArtworkElement.style.animation = `artwork-initial-entrance 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards`;
            } else {
                // The new "wow" pop-in animation
                newArtworkElement.style.animation = `artwork-pop-in-fast ${transitionDuration * 1.5 / 1000}s cubic-bezier(0.25, 1, 0.5, 1) forwards`;
            }
        }

        // Update progress bar and other UI elements
        const progressPercentage = ((index + 1) / APP_STATE.artworks.length) * 100;
        elements.progressFill.style.width = `${progressPercentage}%`;
        updateInfoPanel(artwork);
        hideSpeechBubble();
        updateNavigationState();
    };

    if (isInitialLoad) {
        showNewArtwork();
    } else {
        // Animate the current artwork out, then show the new one
        currentArtworkElement.style.animation = `artwork-zoom-out-fast ${transitionDuration / 1000}s ease-in forwards`;
        setTimeout(showNewArtwork, transitionDuration);
    }
}

// Update the info panel with artwork details
function updateInfoPanel(artwork) {
  elements.artworkTitle.textContent = artwork.name;
  elements.artworkArtist.textContent = artwork.artist;
  elements.artworkYear.textContent = artwork.year;
  // Join all facts into a single paragraph.
  elements.artworkFact.innerHTML = artwork.facts.join(' ');
  renderImageOrPixels(elements.artworkThumb, artwork);
}

// Toggle info panel visibility
function toggleInfoPanel() {
  APP_STATE.isInfoPanelVisible = true;
  elements.infoPanel.style.display = 'block';
  elements.modalOverlay.classList.add('active');

  // Play sound
  playSound('click');

  // Update button appearance
  elements.infoBtn.style.backgroundColor = 'var(--accent-primary)';
}

// Close info panel
function closeInfoPanel() {
  APP_STATE.isInfoPanelVisible = false;
  elements.modalOverlay.classList.remove('active');

  setTimeout(() => {
    elements.infoPanel.style.display = 'none';
  }, 300);

  // Play sound
  playSound('click');

  // Update button appearance
  elements.infoBtn.style.backgroundColor = '';
}

// Update navigation button states - fixed version
function updateNavigationState() {
  // Check if we can navigate to previous/next artwork
  const hasPrevious = APP_STATE.currentArtworkIndex > 0;
  const hasNext = APP_STATE.currentArtworkIndex < APP_STATE.artworks.length - 1;

  // Update previous button state
  elements.prevBtn.style.opacity = hasPrevious ? '1' : '0.5';
  elements.prevBtn.style.pointerEvents = hasPrevious ? 'auto' : 'none';

  // Update next button state
  elements.nextBtn.style.opacity = hasNext ? '1' : '0.5';
  elements.nextBtn.style.pointerEvents = hasNext ? 'auto' : 'none';
}

// Handle next button click - fixed version
function handleNextClick() {
  if (APP_STATE.currentArtworkIndex < APP_STATE.artworks.length - 1) {
    displayArtworkByIndex(APP_STATE.currentArtworkIndex + 1);
    playSound('next');
  } else {
    playSound('error');
  }
}

// Handle previous button click - fixed version
function handlePrevClick() {
  if (APP_STATE.currentArtworkIndex > 0) {
    displayArtworkByIndex(APP_STATE.currentArtworkIndex - 1);
    playSound('next');
  } else {
    playSound('error');
  }
}

// Handle random button click
function handleRandomClick() {
  // Show a new random artwork
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * APP_STATE.artworks.length);
  } while (newIndex === APP_STATE.currentArtworkIndex && APP_STATE.artworks.length > 1);

  displayArtworkByIndex(newIndex);
  playSound('success'); // Play a success sound
}

// Handle refresh button click
function handleRefreshClick() {
  // Visual refresh animation
  elements.artworkDisplay.style.opacity = 0.5;

  setTimeout(() => {
    elements.artworkDisplay.style.opacity = 1;
    // Re-render the current artwork for a fresh look
    renderArtwork(APP_STATE.artworks[APP_STATE.currentArtworkIndex]);
    playSound('click');
  }, 300);
}

// Toggle mute state
function toggleMute() {
  APP_STATE.isMuted = !APP_STATE.isMuted;

  // Update button text and icon
  if (APP_STATE.isMuted) {
    elements.muteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
      MUTED
    `;

    // Pause background audio if it exists
    if (backgroundAudio) {
      backgroundAudio.pause();
    }
  } else {
    elements.muteBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
      SOUND
    `;

    // Resume background audio if it exists
    if (backgroundAudio) {
      backgroundAudio.play().catch(e => console.log('Play prevented:', e));
    }

    // Play a sound to confirm unmuting
    setTimeout(() => playSound('click'), 100);
  }
}

// Toggle between dark and light themes
function toggleTheme() {
  APP_STATE.isThemeDark = !APP_STATE.isThemeDark;

  if (APP_STATE.isThemeDark) {
    document.body.classList.remove('theme-light');
    elements.themeToggle.innerHTML = '🌙';
  } else {
    document.body.classList.add('theme-light');
    elements.themeToggle.innerHTML = '☀️';
  }

  playSound('click');
}

// Toggle fullscreen mode
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      APP_STATE.isFullscreen = true;
      elements.fullscreenBtn.innerHTML = '⛶';
      playSound('success');
    }).catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
      playSound('error');
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        APP_STATE.isFullscreen = false;
        elements.fullscreenBtn.innerHTML = '⛶';
        playSound('click');
      }).catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  }
}

// Handle keyboard navigation
function handleKeyNavigation(e) {
  // Don't interfere with input fields or when modifiers are pressed
  if (e.target.matches('input, textarea, select') || e.ctrlKey || e.altKey || e.metaKey) {
    return;
  }

  switch (e.key) {
    case 'ArrowLeft':
      handlePrevClick();
      elements.prevBtn.focus();
      break;
    case 'ArrowRight':
      handleNextClick();
      elements.nextBtn.focus();
      break;
    case ' ': // Space bar
      e.preventDefault();
      const activeEl = document.activeElement;
      if (activeEl && activeEl.tagName === 'BUTTON') {
        activeEl.blur();
      }
      if (activeEl !== elements.artworkDisplay) {
        handleArtworkClick();
      }
      break;
    case 'r':
      handleRandomClick();
      elements.randomBtn.focus();
      break;
    case 'e':
      handleRefreshClick();
      elements.refreshBtn.focus();
      break;
    case 'i':
      if (APP_STATE.isInfoPanelVisible) {
        closeInfoPanel();
      } else {
        toggleInfoPanel();
      }
      elements.infoBtn.focus();
      break;
    case 'm':
      toggleMute();
      elements.muteBtn.focus();
      break;
    case 't':
      toggleTheme();
      elements.themeToggle.focus();
      break;
    case 'f':
      toggleFullscreen();
      elements.fullscreenBtn.focus();
      break;
    case 'Escape':
      if (APP_STATE.isInfoPanelVisible) {
        closeInfoPanel();
      }
      break;
  }
}

// Random idle animations for instructor
function startIdleAnimations() {
  if (APP_STATE.useCharacterImages) return; // This animation is for placeholders only

  setInterval(() => {
    if (!elements.speechBubble.classList.contains('hidden')) return;

    // Random small movements or expression changes
    const shouldAnimate = Math.random() > 0.7;

    if (shouldAnimate) {
      const animations = [
        () => {
          elements.instructor.style.transform = 'translateX(-5px)';
          setTimeout(() => {
            elements.instructor.style.transform = 'translateX(0)';
          }, 500);
        },
        () => {
          elements.instructor.style.transform = 'translateX(5px)';
          setTimeout(() => {
            elements.instructor.style.transform = 'translateX(0)';
          }, 500);
        },
        () => {
          renderInstructorSprite('happy');
          setTimeout(() => {
            renderInstructorSprite('neutral');
          }, 800);
        }
      ];

      // Execute a random animation
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      randomAnimation();
    }
  }, 4000);
}

// Add a small student animation occasionally
function animateStudents() {
  setInterval(() => {
    const randomStudentIndex = Math.floor(Math.random() * elements.students.length);
    const student = elements.students[randomStudentIndex];

    // Simple animation: slight bounce or wiggle
    const animations = [
      () => {
        student.style.transition = 'transform 0.3s ease';
        student.style.transform = 'translateY(-2px)';
        setTimeout(() => {
          student.style.transform = 'translateY(0)';
        }, 300);
      },
      () => {
        student.style.transition = 'transform 0.3s ease';
        student.style.transform = 'rotate(3deg)';
        setTimeout(() => {
          student.style.transform = 'rotate(0deg)';
        }, 300);
      },
      () => {
        student.style.transition = 'transform 0.3s ease';
        student.style.transform = 'rotate(-3deg)';
        setTimeout(() => {
          student.style.transform = 'rotate(0deg)';
        }, 300);
      }
    ];

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    randomAnimation();
  }, 5000);
}

// Helper to create pixel art based on text representation
function createPixelCanvas(pixelText, colorMap) {
  // Parse the pixel text
  const rows = pixelText.trim().split('\n');
  const width = Math.max(...rows.map(row => row.length));
  const height = rows.length;

  // Create a canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.imageRendering = 'pixelated';

  const ctx = canvas.getContext('2d');

  // Draw the pixels
  for (let y = 0; y < height; y++) {
    const row = rows[y];
    for (let x = 0; x < row.length; x++) {
      const pixel = row[x];
      if (pixel in colorMap) {
        ctx.fillStyle = colorMap[pixel];
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  return canvas;
}

// Create a simple pixelated effect for text
function createPixelText(text, size, color) {
  const container = document.createElement('div');
  container.style.color = color;
  container.style.fontFamily = "'Press Start 2P', cursive";
  container.style.fontSize = `${size}px`;
  container.style.lineHeight = '1.2';
  container.style.whiteSpace = 'pre-wrap';
  container.style.textAlign = 'center';
  container.textContent = text;

  return container;
}

// Add a subtle particle effect in the classroom
function addParticleEffects() {
  const classroom = document.querySelector('.classroom-scene');
  const particleContainer = document.createElement('div');
  particleContainer.style.position = 'absolute';
  particleContainer.style.top = '0';
  particleContainer.style.left = '0';
  particleContainer.style.width = '100%';
  particleContainer.style.height = '100%';
  particleContainer.style.overflow = 'hidden';
  particleContainer.style.pointerEvents = 'none';
  particleContainer.style.zIndex = '5';

  classroom.appendChild(particleContainer);

  // Create dust particles
  for (let i = 0; i < 20; i++) {
    createDustParticle(particleContainer);
  }
}

// Create a single dust particle
function createDustParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'dust-particle';
  particle.style.position = 'absolute';
  particle.style.width = `${Math.random() * 3 + 1}px`;
  particle.style.height = particle.style.width;
  particle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';

  // Set random starting position
  resetParticle(particle);

  container.appendChild(particle);

  // Animate the particle
  animateParticle(particle);
}

// Reset a particle to a new random position
function resetParticle(particle) {
  particle.style.top = `${Math.random() * 70}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
}

// Animate a dust particle
function animateParticle(particle) {
  const duration = Math.random() * 10000 + 5000;
  const xMovement = Math.random() * 50 - 25;
  const yMovement = Math.random() * 30 - 10;

  particle.style.transition = `transform ${duration}ms linear, opacity ${duration}ms ease-in-out`;
  particle.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
  particle.style.opacity = '0';

  setTimeout(() => {
    resetParticle(particle);
    particle.style.transition = 'none';
    particle.style.transform = 'translate(0, 0)';

    // Schedule next animation
    setTimeout(() => {
      animateParticle(particle);
    }, 100);
  }, duration);
}

// Create a snapshot/screenshot of the classroom
function takeScreenshot() {
  const scene = document.querySelector('.classroom-scene');

  // Use html2canvas library if available, otherwise show a message
  if (typeof html2canvas === 'function') {
    html2canvas(scene).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `pixel-art-classroom-${Date.now()}.png`;
      link.click();
    });
  } else {
    console.log('Screenshot functionality requires html2canvas library');
    alert('Screenshot functionality is not available. Please add html2canvas library to enable this feature.');
  }
}

// Helper function to add smooth hover effects to buttons
function addButtonHoverEffects() {
  const buttons = document.querySelectorAll('.control-btn');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (!APP_STATE.isMuted) {
        playSound('hover');
      }
    });
  });
}

// Show a notification or tip to the user
function showNotification(message, duration = 3000) {
  // Create notification element if it doesn't exist
  let notification = document.querySelector('.notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.position = 'absolute';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--accent-primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 15px';
    notification.style.borderRadius = '5px';
    notification.style.fontFamily = "'VT323', monospace";
    notification.style.fontSize = '16px';
    notification.style.zIndex = '100';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    document.body.appendChild(notification);
  }

  // Set message and show notification
  notification.textContent = message;
  notification.style.opacity = '1';
  notification.style.transform = 'translateY(0)';

  // Hide after duration
  clearTimeout(window.notificationTimeout);
  window.notificationTimeout = setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
  }, duration);
}

// Add accessibility features
function enhanceAccessibility() {
  // Add aria labels and roles where needed
  elements.artworkDisplay.setAttribute('role', 'button');
  elements.artworkDisplay.setAttribute('aria-label', 'Click to learn about this artwork');

  // Add focus styles
  const style = document.createElement('style');
  style.textContent = `
    .control-btn:focus-visible,
    .artwork-display:focus-visible {
      outline: 3px solid var(--accent-secondary);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);

  // Add skip to content link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.position = 'absolute';
  skipLink.style.left = '-9999px';
  skipLink.style.top = '0';
  skipLink.style.backgroundColor = 'var(--accent-primary)';
  skipLink.style.color = 'white';
  skipLink.style.padding = '10px';
  skipLink.style.zIndex = '9999';
  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '0';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-9999px';
  });
  skipLink.addEventListener('click', e => {
    e.preventDefault();
    elements.artworkDisplay.focus();
  });
  document.body.prepend(skipLink);
}

// Display tips for first-time users
function showTips() {
  const tips = [
    "Click on the artwork to learn interesting facts!",
    "Use the arrow keys to navigate between artworks.",
    "Press 'M' to toggle sound on/off.",
    "Press 'F' to enter fullscreen mode.",
    "Press 'I' to view complete info about the current artwork.",
    "Press 'R' for a random artwork.",
    "Press 'E' to refresh the artwork.",
    "Press 'T' to toggle dark/light mode."
  ];

  let tipIndex = 0;

  function showNextTip() {
    if (tipIndex < tips.length) {
      showNotification(tips[tipIndex], 5000);
      tipIndex++;
      setTimeout(showNextTip, 6000);
    }
  }

  // Start showing tips after a delay
  setTimeout(showNextTip, 3000);
}

// The entry point when the page loads.
window.addEventListener('DOMContentLoaded', () => {
  // Disable the right-click context menu across the entire document
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Set up essential controls immediately
  elements.themeToggle.addEventListener('click', toggleTheme);
  elements.fullscreenBtn.addEventListener('click', toggleFullscreen);
  document.addEventListener('keydown', handleKeyNavigation);

  initApp();
  addButtonHoverEffects();
  enhanceAccessibility();
  addParticleEffects();
});

// Add a debugging tool in development environment
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  console.log('🎮 Development mode active');
  window.APP_STATE = APP_STATE; // Make app state accessible in console
  window.displayArtwork = index => displayArtworkByIndex(index); // Add manual control
  window.takeScreenshot = takeScreenshot; // Add screenshot function
}

// New functions for instructor talking animation
function startInstructorTalkingAnimation() {
  // Stop any existing animation to prevent conflicts
  stopInstructorTalkingAnimation();
  elements.instructor.classList.remove('image-idle');

  const instructorImg = elements.instructor.querySelector('img');
  const talkingFrames = APP_STATE.characterImagePaths.instructorTalking;
  const frameSequence = [0, 1, 2, 1]; // This creates the 1 -> 2 -> 3 -> 2 loop
  let currentFrame = 0;

  if (!instructorImg || talkingFrames.length === 0) return;

  // Start the animation loop
  instructorAnimationInterval = setInterval(() => {
    const frameIndex = frameSequence[currentFrame];
    instructorImg.src = talkingFrames[frameIndex];
    currentFrame = (currentFrame + 1) % frameSequence.length;
  }, 100); // Adjust speed of animation here (in ms)
}

function stopInstructorTalkingAnimation() {
  clearInterval(instructorAnimationInterval);
  instructorAnimationInterval = null;

  const instructorImg = elements.instructor.querySelector('img');
  if (instructorImg) {
    instructorImg.src = APP_STATE.characterImagePaths.instructor;
    elements.instructor.classList.add('image-idle');
  }
}