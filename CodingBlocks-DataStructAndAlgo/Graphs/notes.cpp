// All vertices connected to each
// Directed graph -> one directional, Undirected -> bidirectional
// How to store -> Adjacency matrix

// In this matrix, if we have 'v' vertices, then matrix is v x v.
// If there is an edge between 0, 1, we mark 1 on i = 0, j = 1 index, and, i = 1, j = 0.

// But here, there are many places left empty.
// An optimization is to use Adjacency list.
// Eac array tells to which all vertices is that vertex connected to.
// 0: [1, 2]
// 1: [0, 2] and so on.

// BFS, DFS work for graphs same as for binary trees.