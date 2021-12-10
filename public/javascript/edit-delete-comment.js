// async function editCommentHandler(event) {
//     event.preventDefault();
  
//     const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/comments/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//           comment
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard/');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('.comment-form').addEventListener('submit', editCommentHandler);
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  async function deleteCommentHandler(event) {

   
        event.preventDefault();
      

        const response = await fetch(`/api/comments/${id}`, {
          method: 'DELETE'
        });
      
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
      
      document.querySelector(`#delete-comment-btn${id}`).addEventListener('click', deleteCommentHandler);
      

      async function editCommentHandler(event) {
        event.preventDefault();
      
        const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
        const response = await fetch(`/api/comments/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
      
      document.querySelector(`#edit-comment-btn${id}`).addEventListener('click', editCommentHandler);
      
  
    
      console.log(id)

//     var commentid = `/api/comments/${id}`;
//     fetch(commentid, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json'
//     }
//   }    
//       ).then(function(response){
//            return response.json()}).then(function(results){
//             for (let i = 0; i < results.length; i++) {
              
//             console.log(results[i].id)
           
//             // const result = results.findIndex(comment => comment.id === results[i].id);
//             //   console.log(result)
              
//               event.stopPropagation();
            
//               // const targetComment = event.target;
//               // console.log(targetComment)
            
//               // if (targetComment === results[i].id) {
//                 const response =  fetch(`/api/comments/${id}`, {
//                   method: 'DELETE'
//                 });
  
//                     if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//               // }
            
 

          
//           }})}
        

        //   document.querySelector(`#delete-comment-btn${id}`).addEventListener('click', deleteCommentHandler);
             
    //         const result = results.findIndex(comment => comment.id === results[i].id);
            
    //         console.log(result)
    //         const returnNewArr = results.splice(result, 1)
    //         console.log(returnNewArr)
            
    //           const response =  fetch(`/api/comments/${result}`, {
    //             method: 'DELETE'
    //           });

    //               if (response.ok) {
    //   document.location.replace('/dashboard/');
    // } else {
    //   alert(response.statusText);
    // }
    // return returnNewArr

    //       }});

    //     }





  // const deleteCommentHandler = (id) =>
  // fetch(`/api/comments/${id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });


  //   const id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  //   ];
  //   console.log(id)
    // const response = await fetch(`/api/comments/${id}`, {
    //   method: 'DELETE'
    // });
  
  //   if (response.ok) {
  //     document.location.replace('/dashboard/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  
        
  
        
       