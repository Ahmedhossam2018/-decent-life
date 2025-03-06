let cards = [
  {
    name: "الاطعام",
    img: "../img/الاطعام.jpg",
    المميزات: "توفير الطعام للمحتاجين",
    العيوب: "تكاليف عالية",
    الوصف: "مبادرة لتوفير الطعام للمحتاجين في المناطق الفقيرة"
  },
  {
    name: "التعليم",
    img: "../img/التعليم.jpg",
    المميزات: "تحسين مستوى التعليم",
    العيوب: "صعوبة الوصول لبعض المناطق",
    الوصف: "مبادرة لتحسين مستوى التعليم في المناطق الفقيرة"
  },
  {
    name: "التمكين",
    img: "../img/التمكين.jpg",
    المميزات: "تمكين الأفراد اقتصادياً",
    العيوب: "حاجة لتدريب مكثف",
    الوصف: "مبادرة لتمكين الأفراد اقتصادياً في المناطق الفقيرة"
  },
  {
    name: "الصحة",
    img: "../img/alsh-square1740061679.jpg",
    المميزات: "تحسين الخدمات الصحية",
    العيوب: "نقص في الموارد الطبية",
    الوصف: "مبادرة لتحسين الخدمات الصحية في المناطق الفقيرة"
  },
  {
    name: "الاغاثات العاجلة",
    img: "../img/الاغاثة العاجلة.jpg",
    المميزات: "توفير المساعدات العاجلة",
    العيوب: "صعوبة الوصول للمناطق النائية",
    الوصف: "مبادرة لتوفير المساعدات العاجلة في حالات الكوارث"
  },
  {
    name: "حالات انسانية",
    img: "../img/حالات انسانية.jpg",
    المميزات: "مساعدة الأفراد في حالات إنسانية صعبة",
    العيوب: "حاجة إلى تمويل مستمر",
    الوصف: "مبادرة لدعم الأفراد في حالات إنسانية صعبة"
  },
  {
    name: "حالات عاجلة",
    img: "../img/حالات عاجلة.jpg",
    المميزات: "توفير مساعدات عاجلة للأفراد",
    العيوب: "صعوبة الوصول للمناطق النائية",
    الوصف: "مبادرة لتوفير مساعدات عاجلة للأفراد في حالات الطوارئ"
  },
  {
    name: "افطار صائم",
    img: "../img/افطار صائم.jpg",
    المميزات: "توفير وجبات إفطار للصائمين",
    العيوب: "تكاليف عالية خلال شهر رمضان",
    الوصف: "مبادرة لتوفير وجبات إفطار للصائمين في شهر رمضان"
  },
  {
    name: "منافذ البيع",
    img: "../img/منافذ البيع.jpg",
    المميزات: "توفير منتجات بأسعار مخفضة",
    العيوب: "حاجة إلى إدارة لوجستية",
    الوصف: "مبادرة لتوفير منتجات بأسعار مخفضة للمحتاجين"
  }
];

let gallery = document.getElementById("card-gallery");

window.onload = function () {
  cards.forEach((card, index) => {
    showDetails(index);
  });
};

cards.forEach((card, index) => {
  const carder = `
  <div class="col-md-4 container">
    <div class="h1-img  text-light ">
      <img src="${card.img}" class="card-img-top" alt="${card.name}" onclick="showDetails(${index})" data-bs-toggle="modal" data-bs-target="#machineModal">
      <div class="card-body text-center">
        <button class="button" onclick="showDetails(${index})" data-bs-toggle="modal" data-bs-target="#machineModal">
          ${card.name}
        </button>
      </div>
    </div>
  </div>`;
  gallery.insertAdjacentHTML("beforeend", carder);
});

function showDetails(main) {
  let machine = machine[main];
  document.getElementById("machineModalTitle").textContent = machine.name;
  document.getElementById("machineModalImage").src = machine.img;
  document.getElementById("machineAdvantages").textContent = machine.advantages;
  document.getElementById("machineDisadvantages").textContent = machine.disadvantages;
  document.getElementById("machineDescription").textContent = machine.description;
}
document.getElementById("machineModal").addEventListener("hidden.bs.modal", () => {

  document.getElementById("machineModalTitle").style.display = "";
  document.getElementById("machineModalImage").style.display = "";
  document.getElementById("machineAdvantages").style.display = "";
  document.getElementById("machineDisadvantages").style.display = "";
  document.getElementById("machineDescription").style.display = "";
  document.getElementById("st").style.display = "";
  document.getElementById("ts").style.display = "";
  document.getElementById("sho").style.display = "";

  let videoContainer = document.getElementById("videoContainer");
  if (videoContainer) {
    videoContainer.innerHTML = "";
  }
});
function filterMachines() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const machineCards = document.querySelectorAll(".container");

  machineCards.forEach((card) => {
    const machineName = card.querySelector(".card-title").textContent.toLowerCase();

    if (machineName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function filterMachines() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const machineCards = document.querySelectorAll(".container");

  machineCards.forEach((card) => {
    const machineName = card.querySelector(".card-title")
      .textContent.toLowerCase();

    if (machineName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function showVideo() {
  document.getElementById("machineModalTitle").style.display = "none";
  document.getElementById("machineModalImage").style.display = "none";
  document.getElementById("machineAdvantages").style.display = "none";
  document.getElementById("machineDisadvantages").style.display = "none";
  document.getElementById("machineDescription").style.display = "none";
  document.getElementById("st").style.display = "none";
  document.getElementById("ts").style.display = "none";
  document.getElementById("sho").style.display = "none";

  let videoContainer = document.getElementById("videoContainer");
  if (!videoContainer) {
    videoContainer = document.createElement("div");
    videoContainer.id = "videoContainer";
    videoContainer.className = "mt-3 text-center";
    document.querySelector(".modal-body").appendChild(videoContainer);
  }

  videoContainer.innerHTML = "";

  let videoPaths = [
    "./video/Mohammed Saeed - 2alo 3aleky .mp4",
    "./video/Mohammed Saeed - 2alo 3aleky .mp4",
    "./video/Mohammed Saeed - 2alo 3aleky .mp4"
  ];

  videoPaths.forEach((videoPath, index) => {
    let videoWrapper = document.createElement("div");
    videoWrapper.className = "d-inline-block m-2";
    videoWrapper.style.cursor = "pointer";

    let videoThumbnail = document.createElement("video");
    videoThumbnail.id = "gh";
    videoThumbnail.src = videoPath;
    videoThumbnail.width = 150;
    videoThumbnail.controls = false;
    videoThumbnail.muted = true;
    videoThumbnail.className = "rounded shadow";
    videoWrapper.appendChild(videoThumbnail);

    videoWrapper.onclick = function () {
      let enlargedVideo = document.getElementById("enlargedVideo");
      if (enlargedVideo) enlargedVideo.remove();

      enlargedVideo = document.createElement("video");
      enlargedVideo.id = "enlargedVideo";
      enlargedVideo.src = videoPath;
      enlargedVideo.width = 550;
      enlargedVideo.controls = true;
      enlargedVideo.autoplay = true;
      enlargedVideo.className = "mt-3 rounded shadow";

      videoContainer.appendChild(enlargedVideo);
    };

    videoContainer.appendChild(videoWrapper);
  });
}

function showDetails(main) {
  let machine = cards[main];

  document.getElementById("machineModalTitle").textContent = machine.name;
  document.getElementById("machineModalImage").src = machine.img;

  document.getElementById("machineAdvantages").textContent = "";
  document.getElementById("machineDisadvantages").textContent = "";
  document.getElementById("machineDescription").textContent = "";

  function typeText(elementId, text, speed = 50, callback) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = "<span></span>"; 
    let span = element.querySelector("span");

    function addCharacter() {
      if (i < text.length) {
        span.textContent += text[i]; 
        i++;
        setTimeout(addCharacter, speed);
      } else if (callback) {
        callback();
      }
    }

    addCharacter();
  }

  typeText("machineAdvantages", machine.المميزات, 50, () => {
    typeText("machineDisadvantages", machine.العيوب, 50, () => {
      typeText("machineDescription", machine.الوصف, 50);
    });
  });
}



function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterMachines() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const machineCards = document.querySelectorAll(".container");

  machineCards.forEach((card) => {
    const machineName = card.querySelector(".card-title").textContent.toLowerCase();

    if (machineName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
const updatedNumbers = {}; // تخزين القيم المحدثة في الذاكرة

window.addEventListener("load", () => {
  const stats = document.querySelectorAll(".stats-container h2");

  stats.forEach((stat, index) => {
    let savedValue = localStorage.getItem(`stat_${index}`);

    if (savedValue) {
      updatedNumbers[index] = parseInt(savedValue);
    } else {
      updatedNumbers[index] = parseInt(stat.textContent.replace('+', ''));
      localStorage.setItem(`stat_${index}`, updatedNumbers[index]);
    }

    stat.textContent = `+${updatedNumbers[index]}`;
  });
});

function animateNumbers() {
  const stats = document.querySelectorAll(".stats-container h2");

  stats.forEach((stat, index) => {
    let currentValue = updatedNumbers[index] || parseInt(stat.textContent.replace('+', ''));
    let target = Math.floor(currentValue * 1.3);
    let count = currentValue;
    let increment = (target - currentValue) / 100;

    let updateCount = () => {
      count += increment;
      if (count < target) {
        stat.textContent = `+${Math.floor(count)}`;
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = `+${target}`;
        updatedNumbers[index] = target; // تحديث القيمة في الذاكرة
        localStorage.setItem(`stat_${index}`, target); // حفظ القيمة الجديدة
      }
    };

    updateCount();
  });
}

window.addEventListener("scroll", animateNumbers);
