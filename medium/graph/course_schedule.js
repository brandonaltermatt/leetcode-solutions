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
const canFinishBfs = function (numCourses, prerequisites) {
  const adjacencyList = new Map();
  const inDegree = Array(numCourses).fill(0);
  const stack = [];
  let visited = 0;

  prerequisites.forEach((preReq) => {
    const course = preReq[0];
    const preCursor = preReq[1];
    // Create an adjacency list for O(1) access to all course prereqs
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

  // Simulate removing node from the graph by decrementing the incoming edge count of its neighbors
  // Add neighbors to stack if indegree becomes zero
  while (stack.length) {
    const course = stack.pop();
    if (adjacencyList.has(course)) {
      adjacencyList.get(course).forEach((preCursor) => {
        if (--inDegree[preCursor] === 0) stack.push(preCursor);
      });
    }
    // Keep a count of visited nodes
    visited++;
  }

  return visited === numCourses;
};

// Solution using depth first search and memoization to cache previously calculated results
const canFinishDfs = function (numCourses, prerequisites) {
  const adjacencyList = Array.from({ length: numCourses }, (e) => []);
  const vertexState = new Array(numCourses).fill(0);

  // Create an adjacency list for O(1) access to all course prereqs
  prerequisites.forEach((preReq) => {
    const course = preReq[0];
    const dependency = preReq[1];
    adjacencyList[dependency].push(course);
  });

  const hasCycle = (course) => {
    // Status of 1 indicates course has been processed already, so we can skip it
    if (vertexState[course] === 1) return false;
    // Status of -1 indicates course is being processed, i.e. we have cycled back to it
    if (vertexState[course] === -1) return true;

    vertexState[course] = -1;

    // Iterate through the vertex's neighbors
    if (adjacencyList[course].some((preReq) => {
      if (hasCycle(preReq)) return true;
      return false;
    })) return true;

    // Mark the course as finished
    vertexState[course] = 1;
    return false;
  };

  // Iterate through all courses to check for loops
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
};
