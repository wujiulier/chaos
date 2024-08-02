function getIntersectionNode(headA,headB){
  if(!headA.length || !headB.length){
    return null;
  }
  let p1 = headA.length;
  let p2 = headB.length;
  let p = 0;
  
  while(p< p1 && p<p2){
    if(headA[p1 - 1 - p] === headB[p2 - 1 - p]){
      p++;
      continue;
    }

    break;
  }

  if(p === 0) {
    return null;
  }

  return headA[p1 - p];
}

console.log(getIntersectionNode([4,1,8,4,5],[5,6,1,8,4,5]));