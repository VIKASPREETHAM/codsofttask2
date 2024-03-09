document.addEventListener("DOMContentLoaded", function () {
    const resumeButton = document.getElementById("resumeButton");
    const resumeModal = document.getElementById("resumeModal");
    const closeModal = document.getElementsByClassName("close")[0];
  
    resumeButton.addEventListener("click", function () {
      // Trigger the download action
      downloadResume();
      // Display the modal
      resumeModal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function () {
      resumeModal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === resumeModal) {
        resumeModal.style.display = "none";
      }
    });
  
    function downloadResume() {
      // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
      const resumePath = 'resume.pdf';
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'resume.pdf';
      
      // Append the link to the document and trigger a click event to start the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
  