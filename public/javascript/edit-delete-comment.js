// async function editFormHandler(event) {
//     event.preventDefault();
  
//     const comment = document.querySelector('textarea[name="edit-comment"]').value.trim();
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
  
//   document.querySelector('.edit-comment-form').addEventListener('submit', editFormHandler);

//   async function deleteFormHandler(event) {
//     event.preventDefault();
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/comments/${id}`, {
//       method: 'DELETE'
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard/');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('.delete-comment-btn').addEventListener('click', deleteFormHandler);
  
  