// Credit: Geeks for Geeks was used for inspiration and help

function binarySearch(list, element)
{
    let left = 0;
    let right = list.length - 1;
    let mid;
    
    while(left <= right)
    {
       mid = Math.floor((right +left)/2);
       if(list[mid] == element)
       {
           let first;
           for(let i = mid; list[i] == element; i--)
           {
               if(list[i] == element)
               {
                   first = i;
               }
           }
           return first;
       }
       else if(list[mid] < element)
       {
           left = mid + 1;
       }
       else
       {
           right = mid - 1;
       }
    }
    
    return -1;
}
