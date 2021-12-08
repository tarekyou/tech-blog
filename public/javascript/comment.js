
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(post_id);
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

  async function editCommentHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', editCommentHandler);

  async function deleteCommentHandler(event) {
    event.preventDefault();
  

    var commentid = `http://localhost:3001/api/comments/`;
    fetch(commentid, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
    }
  }    
      ).then(function(response){
           return response.json()}).then(function(results){
            for (let i = 0; i < results.length; i++) {
              
            console.log(results[i].id)
           
            // const result = results.findIndex(comment => comment.id === results[i].id);
            //   console.log(result)
              
              event.stopPropagation();
            
              // const targetComment = event.target;
              // console.log(targetComment)
            
              // if (targetComment === results[i].id) {
                const response =  fetch(`/api/comments/${results[i].id}`, {
                  method: 'DELETE'
                });
  
                    if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
              // }
            
 

          
          }})}
             
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
  
        
  
        
        document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);