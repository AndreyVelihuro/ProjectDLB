
    function openRegistrationPage() {
      window.location.href = "file:///C:/Users/izezeash/OneDrive%20-%20Intel%20Corporation/Desktop/%D7%90%D7%AA%D7%A8%20%D7%90%D7%A0%D7%93%D7%A8%D7%99%D7%99%20%D7%90%D7%99%D7%A6%D7%99%D7%A7/ProjectDLB/Untitled-1.html";
    }

    function openLoginPage() {
      window.location.href = "file:///C:/Users/izezeash/OneDrive%20-%20Intel%20Corporation/Desktop/%D7%90%D7%AA%D7%A8%20%D7%90%D7%A0%D7%93%D7%A8%D7%99%D7%99%20%D7%90%D7%99%D7%A6%D7%99%D7%A7/ProjectDLB/login.html";
    }

    function showTab(tabName) {
      // Hide all tab contents
      var tabContents = document.getElementsByClassName("tab-content");
      for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
      }

      // Deactivate all tabs
      var tabs = document.getElementsByClassName("tabs")[0].getElementsByTagName("button");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
      }

      // Show selected tab content
      document.getElementById(tabName + "Tab").classList.add("active");

      // Activate selected tab
      document.querySelector(".tabs button[data-tab='" + tabName + "']").classList.add("active");
    }
