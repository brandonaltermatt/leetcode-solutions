const TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.map.key ? this.map.key.push({ timestamp, value }) : this.map.key = [{ timestamp, value }];
};

const binarySearch = (target, candidates) => {
  let low = 0;
  let high = candidates.length - 1;
  let mid = Math.floor(candidates.length / 2);

  while (low <= high) {
    const midCandidate = candidates[mid];

    if (midCandidate.timestamp === target) {
      return midCandidate.value;
    }

    if (midCandidate.timestamp <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = Math.floor((high + low) / 2);
  }

  return candidates[mid]?.value || '';
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const candidates = this.map[key];

  return candidates ? binarySearch(timestamp, candidates) : '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
