function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }