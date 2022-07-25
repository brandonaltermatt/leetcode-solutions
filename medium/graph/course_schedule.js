/* https://leetcode.com/problems/course-schedule/
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
take course bi first if you want to take course ai.
    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = Array(numCourses).fill(0);
  const queue = [];
  let visited = 0;

  prerequisites.forEach((preReq) => {
    const course = preReq[0];
    const preCursor = preReq[1];
    // Create a list of outgoing edges for each preCursor
    if (graph.has(preCursor)) {
      graph.get(preCursor).push(course);
    } else {
      graph.set(preCursor, [course]);
    }
    // Count the number of incoming edges for each course
    inDegree[course]++;
  });

  // Queue the vertices with no incoming edges
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const course = queue.shift();
    if (graph.has(course)) {
      graph.get(course).forEach((preCursor) => {
        if (++inDegree[preCursor] === 0) queue.push(preCursor);
      });
    }
    visited++;
  }

  return visited === numCourses;
};
