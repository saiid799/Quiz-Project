// Define the questions array containing objects with question, answers, correct index, and explanation
const questions = [
  {
    question:
      "IoT (Nesnelerin İnterneti) kavramı aşağıdakilerden hangisiyle ilişkilidir?",
    answers: [
      "a) Nesnelerin fiziksel olarak birbirine bağlanması",
      "b) İnternet üzerinden veri paylaşımı",
      "c) Bulut bilişim teknolojisi",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT kavramı, nesnelerin fiziksel olarak birbirine bağlanması, İnternet üzerinden veri paylaşımı ve bulut bilişim teknolojisiyle ilişkilidir, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question: "IoT'nin temel amacı nedir?",
    answers: [
      "a) Nesnelerin birbirleriyle iletişim kurmasını sağlamak",
      "b) İnternetin hızını artırmak",
      "c) Bilgisayar ağlarını güçlendirmek",
      "d) Veri depolamak",
    ],
    correct: 0,
    why: "IoT'nin temel amacı, nesnelerin birbirleriyle iletişim kurmasını sağlamaktır, bu nedenle 'a) Nesnelerin birbirleriyle iletişim kurmasını sağlamak' doğrudur.",
  },
  {
    question:
      "IoT'nin potansiyel uygulama alanları aşağıdakilerden hangisinde doğru olarak sıralanmıştır?",
    answers: [
      "a) Sağlık, ulaşım, tarım",
      "b) Finans, eğlence, turizm",
      "c) Spor, moda, medya",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "IoT'nin potansiyel uygulama alanları sağlık, ulaşım ve tarım gibi endüstrilerde bulunur, bu yüzden 'a) Sağlık, ulaşım, tarım' doğrudur.",
  },
  {
    question:
      "IoT'nin getirdiği potansiyel faydalar aşağıdakilerden hangisinde doğru olarak sıralanmıştır?",
    answers: [
      "a) Verimlilik artışı, maliyet tasarrufu, daha iyi karar verme",
      "b) Hızlı internet bağlantısı, veri depolama, daha fazla eğlence",
      "c) Moda trendlerini takip etme, sosyal medya paylaşımları, haberlere erişim",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "IoT'nin getirdiği potansiyel faydalar arasında verimlilik artışı, maliyet tasarrufu ve daha iyi karar verme bulunur, bu nedenle 'a) Verimlilik artışı, maliyet tasarrufu, daha iyi karar verme' doğrudur.",
  },
  {
    question: "Bulut bilişim aşağıdakilerden hangisini sağlar?",
    answers: [
      "a) Veri depolama ve işleme gücü",
      "b) İnternet servis sağlayıcısı hizmetleri",
      "c) Fiziksel sunucuların yönetimi",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "Bulut bilişim, veri depolama, işleme gücü, internet servis sağlayıcısı hizmetleri ve fiziksel sunucuların yönetimini sağlar, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question:
      "Bulut bilişimde 'SaaS' (Yazılım olarak Hizmet) terimi neyi ifade eder?",
    answers: [
      "a) Yazılım uygulamalarının internet üzerinden sunulması",
      "b) Platform hizmeti sunulması",
      "c) Altyapı hizmeti sunulması",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "'SaaS' (Yazılım olarak Hizmet) terimi, yazılım uygulamalarının internet üzerinden sunulmasını ifade eder, bu nedenle 'a) Yazılım uygulamalarının internet üzerinden sunulması' doğrudur.",
  },
  {
    question:
      "Bulut bilişimde 'PaaS' (Platform olarak Hizmet) terimi neyi ifade eder?",
    answers: [
      "a) Yazılım uygulamalarının internet üzerinden sunulması",
      "b) Platform hizmeti sunulması",
      "c) Altyapı hizmeti sunulması",
      "d) Tüm seçenekler",
    ],
    correct: 1,
    why: "'PaaS' (Platform olarak Hizmet) terimi, platform hizmeti sunmayı ifade eder, bu yüzden 'b) Platform hizmeti sunulması' doğrudur.",
  },
  {
    question:
      "Bulut bilişimde 'IaaS' (Altyapı olarak Hizmet) terimi neyi ifade eder?",
    answers: [
      "a) Yazılım uygulamalarının internet üzerinden sunulması",
      "b) Platform hizmeti sunulması",
      "c) Altyapı hizmeti sunulması",
      "d) Tüm seçenekler",
    ],
    correct: 2,
    why: "'IaaS' (Altyapı olarak Hizmet) terimi, altyapı hizmeti sunmayı ifade eder, bu nedenle 'c) Altyapı hizmeti sunulması' doğrudur.",
  },
  {
    question: "IoT ve bulut bilişim arasındaki temel ilişki nedir?",
    answers: [
      "a) IoT, bulut bilişimi kullanarak verileri depolar ve işler.",
      "b) Bulut bilişim, IoT cihazları arasında iletişimi sağlar.",
      "c) IoT, bulut bilişim teknolojilerini kullanarak hizmetler sunar.",
      "d) IoT ve bulut bilişim arasında doğrudan bir ilişki yoktur.",
    ],
    correct: 0,
    why: "IoT, bulut bilişimi kullanarak verileri depolar ve işler, bu nedenle 'a) IoT, bulut bilişimi kullanarak verileri depolar ve işler.' doğrudur.",
  },
  {
    question:
      "IoT cihazlarından elde edilen verilerin bulutta depolanması ne gibi avantajlar sağlar?",
    answers: [
      "a) Verilere her yerden erişim imkanı",
      "b) Büyük veri analizi ve öngörüsel analitik yapabilme",
      "c) Veri kaybı riskinin azalması",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT cihazlarından elde edilen verilerin bulutta depolanması, verilere her yerden erişim, büyük veri analizi ve veri kaybı riskinin azalması gibi avantajlar sağlar, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question:
      "IoT ve bulut bilişim arasındaki güvenlik konusuyla ilgili aşağıdakilerden hangisi doğrudur?",
    answers: [
      "a) IoT cihazları daha güvenli olduğu için bulut bilişim kullanmaya gerek yoktur.",
      "b) Bulut bilişim, IoT cihazlarından elde edilen verilerin güvenliğini sağlamak için geliştirilmiştir.",
      "c) IoT cihazları ve bulut bilişim arasında güvenlik açığı yoktur.",
      "d) Tüm seçenekler",
    ],
    correct: 1,
    why: "Bulut bilişim, IoT cihazlarından elde edilen verilerin güvenliğini sağlamak için geliştirilmiştir, bu nedenle 'b) Bulut bilişim, IoT cihazlarından elde edilen verilerin güvenliğini sağlamak için geliştirilmiştir.' doğrudur.",
  },
  {
    question: "IoT ve bulut bilişim arasındaki veri iletimi nasıl gerçekleşir?",
    answers: [
      "a) Kablosuz ağlar kullanılarak",
      "b) Fiziksel depolama cihazları aracılığıyla",
      "c) Bluetooth teknolojisiyle",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "IoT ve bulut bilişim arasındaki veri iletimi kablosuz ağlar kullanılarak gerçekleşir, bu nedenle 'a) Kablosuz ağlar kullanılarak' doğrudur.",
  },
  {
    question: "IoT'nin veri analitiği açısından en büyük katkısı nedir?",
    answers: [
      "a) Büyük veri setlerinin elde edilmesi",
      "b) Veri analitiği algoritmalarının gelişimi",
      "c) Gerçek zamanlı veri işleme imkanı",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT'nin veri analitiği açısından en büyük katkısı, büyük veri setlerinin elde edilmesi, veri analitiği algoritmalarının gelişimi ve gerçek zamanlı veri işleme imkanı sağlamasıdır, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question:
      "IoT ile elde edilen verilerin analiz edilmesi aşağıdakilerden hangi alanlarda faydalı olabilir?",
    answers: [
      "a) Pazarlama stratejileri",
      "b) Hastalık teşhisi ve sağlık hizmetleri",
      "c) Enerji verimliliği",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT ile elde edilen verilerin analiz edilmesi, pazarlama stratejileri, hastalık teşhisi ve sağlık hizmetleri, enerji verimliliği gibi birçok alanda faydalı olabilir, bu nedenle 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question: "Veri analitiği süreci aşağıdaki adımlardan hangisiyle başlar?",
    answers: [
      "a) Veri toplama",
      "b) Veri depolama",
      "c) Veri işleme",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "Veri analitiği süreci, veri toplama ile başlar, bu nedenle 'a) Veri toplama' doğrudur.",
  },
  {
    question:
      "Veri analitiğinde kullanılan yöntemler aşağıdakilerden hangisinde doğru olarak sıralanmıştır?",
    answers: [
      "a) İstatistiksel analiz, makine öğrenmesi, yapay sinir ağları",
      "b) Veri depolama, veri iletimi, veri güvenliği",
      "c) Bulut bilişim, nesnelerin interneti, kablosuz iletişim",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "Veri analitiğinde kullanılan yöntemler istatistiksel analiz, makine öğrenmesi ve yapay sinir ağları gibi teknikleri içerir, bu yüzden 'a) İstatistiksel analiz, makine öğrenmesi, yapay sinir ağları' doğrudur.",
  },
  {
    question:
      "IoT'nin veri güvenliği açısından karşılaştığı temel zorluk nedir?",
    answers: [
      "a) Veri şifreleme yöntemlerinin yetersizliği",
      "b) Fiziksel güvenlik önlemlerinin eksikliği",
      "c) IoT cihazlarının sınırlı işlem gücü",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT'nin veri güvenliği açısından karşılaştığı temel zorluk, veri şifreleme yöntemlerinin yetersizliği, fiziksel güvenlik önlemlerinin eksikliği ve IoT cihazlarının sınırlı işlem gücüdür, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question:
      "IoT cihazlarının güvenliği için aşağıdaki önlemlerden hangisi gereklidir?",
    answers: [
      "a) Güçlü şifreleme yöntemlerinin kullanılması",
      "b) Düzenli güncelleme ve yama yönetimi",
      "c) Erişim kontrollerinin sağlanması",
      "d) Tüm seçenekler",
    ],
    correct: 3,
    why: "IoT cihazlarının güvenliği için gerekli önlemler arasında güçlü şifreleme yöntemlerinin kullanılması, düzenli güncelleme ve yama yönetimi, erişim kontrollerinin sağlanması bulunur, bu yüzden 'd) Tüm seçenekler' doğrudur.",
  },
  {
    question:
      "IoT ağlarının güvenliğini sağlamak için kullanılan yöntemlerden biri aşağıdakilerden hangisidir?",
    answers: [
      "a) Ağ trafiği izleme ve tehdit tespiti",
      "b) Fiziksel güvenlik önlemleri",
      "c) Veri depolama yöntemleri",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "IoT ağlarının güvenliğini sağlamak için kullanılan yöntemlerden biri, ağ trafiği izleme ve tehdit tespitidir, bu nedenle 'a) Ağ trafiği izleme ve tehdit tespiti' doğrudur.",
  },
  {
    question:
      "IoT cihazlarının siber saldırılara karşı savunmasız olmalarının sebepleri aşağıdakilerden hangisinde doğru olarak sıralanmıştır?",
    answers: [
      "a) Zayıf şifreleme, güncelleme eksikliği, kullanıcı hataları",
      "b) Fiziksel güvenlik önlemlerinin yetersizliği",
      "c) İnternet bağlantısı olmaması",
      "d) Tüm seçenekler",
    ],
    correct: 0,
    why: "IoT cihazlarının siber saldırılara karşı savunmasız olmalarının sebepleri, zayıf şifreleme, güncelleme eksikliği ve kullanıcı hataları gibi faktörlerdir, bu yüzden 'a) Zayıf şifreleme, güncelleme eksikliği, kullanıcı hataları' doğrudur.",
  },
];

let score = 0; // Initialize score
let usedIndexes = [];
let currentQuestionIndex;

// Function to get a random question from the questions array
function getRandomQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (usedIndexes.includes(index));
  usedIndexes.push(index);
  return questions[index];
}

// Function to display a question and its options
function displayQuestion() {
  const questionsLeft = questions.length - usedIndexes.length;
  document.getElementById("remaining-questions").innerText = questionsLeft;

  if (questionsLeft === 0) {
    document.getElementById("final-score").style.display = "block";
    document.getElementById("final-score-value").innerText = score;
    document.getElementById("quiz-container").style.display = "none";
    return;
  }

  const questionObj = getRandomQuestion();
  currentQuestionIndex = questions.indexOf(questionObj);

  document.getElementById("question").innerText = questionObj.question;
  document.getElementById("score").innerText = `Score: ${score}`; // Update score display

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  questionObj.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });

  document.getElementById("showExplanation").style.display = "block"; // Show the "Show Explanation" button
  document.getElementById("nextQuestion").style.display = "none"; // Hide the "Next Question" button
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const questionObj = questions[currentQuestionIndex];
  const optionsContainer = document.getElementById("options");

  // Remove any existing classes
  Array.from(optionsContainer.children).forEach((option) => {
    option.classList.remove("correct", "incorrect");
  });

  if (selectedIndex === questionObj.correct) {
    score++; // Increment score for correct answer
    document.getElementById("score").innerText = `Score: ${score}`; // Update score display
    optionsContainer.children[selectedIndex].classList.add("correct");
  } else {
    optionsContainer.children[selectedIndex].classList.add("incorrect");
  }

  // Store current state in session storage
  const currentState = {
    currentQuestionIndex,
    score,
  };
  sessionStorage.setItem("quizState", JSON.stringify(currentState));

  // Show the "Next Question" button
  document.getElementById("nextQuestion").style.display = "block";
}

// Function to reset the quiz
function resetQuiz() {
  usedIndexes = [];
  score = 0; // Reset score
  document.getElementById("score").innerText = `Score: ${score}`; // Update score display
  document.getElementById("final-score").style.display = "none"; // Hide final score display
  document.getElementById("quiz-container").style.display = "block"; // Show quiz container
  displayQuestion(); // This will start a new round
}

// Event listener for the "Restart Quiz" button
document.getElementById("resetQuiz").addEventListener("click", resetQuiz);

// Event listener for the "Show Explanation" button
document.getElementById("showExplanation").addEventListener("click", () => {
  const explanationPageUrl = `explanation.html?index=${currentQuestionIndex}`;
  window.location.href = explanationPageUrl;
});

// Event listener for the "Next Question" button
document
  .getElementById("nextQuestion")
  .addEventListener("click", displayQuestion);

// Initial call to start quiz
displayQuestion();

// Check if there's a stored quiz state and restore it
const storedState = sessionStorage.getItem("quizState");
if (storedState) {
  const parsedState = JSON.parse(storedState);
  currentQuestionIndex = parsedState.currentQuestionIndex;
  score = parsedState.score;
}