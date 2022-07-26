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
/*
Use a modified Kann's algorithm to detect cycles in a directed acyclic graph.
    Step 0: Find the number of incoming edges (indegree) for all nodes.
    Step 1: Add nodes with zero indegree to a stack (queue also works).
    Step 2: For all the nodes with zero indegree,
      simulate deleting this node from the graph by decrementing its neighbors' indegree by 1.
    Step 3: Increase the count of visited nodes by 1.
    Step 4: Repeat Steps 1 to 3 till there are no nodes left with zero indegree.
    Step 5: If the count of visited nodes is equal to the number of nodes in the graph, return true.
      Else, return false, as this indicates there is a cycle in the graph,
      as we have visited a node more than once, or there were no nodes with zero indegree.
*/
const canFinish = function (numCourses, prerequisites) {
  const adjacencyList = new Map();
  const inDegree = Array(numCourses).fill(0);
  const stack = [];
  let visited = 0;

  prerequisites.forEach((preReq) => {
    const course = preReq[0];
    const preCursor = preReq[1];
    // Create a list of outgoing edges for each preCursor
    if (adjacencyList.has(preCursor)) {
      adjacencyList.get(preCursor).push(course);
    } else {
      adjacencyList.set(preCursor, [course]);
    }
    // Count the number of incoming edges for each course
    inDegree[course]++;
  });

  // Add the vertices with no incoming edges to a stack
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) stack.push(i);
  }

  while (stack.length) {
    const course = stack.pop();
    if (adjacencyList.has(course)) {
      adjacencyList.get(course).forEach((preCursor) => {
        if (--inDegree[preCursor] === 0) stack.push(preCursor);
      });
    }
    visited++;
  }

  return visited === numCourses;
};
