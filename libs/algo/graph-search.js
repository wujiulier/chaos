const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F', 'G'],
    D: ['B'],
    E: ['B'],
    F: ['C'],
    G: ['C']
  };

  // 深度优先
  function depthSearch(graph,start){
    const visited = new Set();
    const result = [];

    function dfs(node){
        if(visited.has(node)){
            return;
        }

        visited.add(node);
        result.push(node);
        for(const n of graph[node] || []){
            dfs(n);
        }
    }

    dfs(start);
    return result;
  }

  console.log(depthSearch(graph,'A'));