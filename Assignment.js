// Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== 'number' ||
    typeof discount !== 'number' ||
    !Number.isFinite(currentPrice) ||
    !Number.isFinite(discount)
  ) {
    return 'Invalid';
  }

  if (discount < 0 || discount > 100) {
    return 'Invalid';
  }

  let discountAmount = (currentPrice * discount) / 100;
  let finalPrice = currentPrice - discountAmount;
  return finalPrice.toFixed(3);
}

// Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== 'string') {
    return 'Invalid';
  }

  if (otp.length !== 8) {
    return false;
  }

  if (!otp.startsWith('ph-')) {
    return false;
  }

  return true;
}

// Problem-03: BCS Final Score Calculator
// Problem-03: BCS Final Score Calculator
function finalScore(exam) {
  if (typeof exam !== 'object' || exam === null || Array.isArray(exam)) {
    return 'Invalid';
  }

  if (typeof exam.right !== 'number' || typeof exam.wrong !== 'number' || typeof exam.skip !== 'number') {
    return 'Invalid';
  }

  if (!Number.isFinite(exam.right) || !Number.isFinite(exam.wrong) || !Number.isFinite(exam.skip)) {
    return 'Invalid';
  }

  if (exam.right < 0 || exam.wrong < 0 || exam.skip < 0) {
    return 'Invalid';
  }

  if (exam.right + exam.wrong + exam.skip !== 100) {
    return 'Invalid';
  }

  let score = exam.right - exam.wrong * 0.5;
  return Math.round(score);
}


// Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (!Array.isArray(array)) {
    return 'Invalid';
  }

  let haCount = 0;
  let naCount = 0;

  for (let i = 0; i < array.length; i++) {
    let vote = array[i];

    if (vote === 'ha') {
      haCount++;
    } else if (vote === 'na') {
      naCount++;
    } else {
      return 'Invalid';
    }
  }

  if (haCount > naCount) {
    return true;
  } else if (naCount > haCount) {
    return false;
  } else {
    return 'equal';
  }
}

// Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }

  if (str.trim().length === 0) {
    return 'Invalid';
  }

  let words = str.split(' ');
  let longestWord = '';
  let token = 0;

  for (let i = 0; i < words.length; i++) {
    let w = words[i];

    if (w.length > 0) {
      token = token + w.length;

      if (w.length > longestWord.length) {
        longestWord = w;
      }
    }
  }

  return {
    longwords: longestWord,
    token: token,
  };
}
