//  bagian navbar
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll('.navbar .dropdown-toggle');
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function () {
        var parent = this.closest('.nav-item');
        parent.classList.toggle('show');
  
        var rect = this.getBoundingClientRect();
        var dropdownMenu = parent.querySelector('.dropdown-menu');
  
        dropdownMenu.style.top = rect.bottom + 'px';
        dropdownMenu.style.left = rect.left + 'px';
      });
    });
  
    window.addEventListener('mouseup', function (event) {
      var dropdowns = document.querySelectorAll('.navbar .nav-item');
  
      dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('show');
        }
      });
    });
  
 
    var productDropdownItems = document.querySelectorAll('.nav-item.products .dropdown-item');
    
    productDropdownItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
  
        var productName = item.textContent.trim();
        var productUrls = {
          'Jira Software': 'https://www.atlassian.com/software/jira',
          'Jira Service Management': 'https://www.atlassian.com/software/jira/service-management',
          'Confluence': 'https://www.atlassian.com/software/confluence',
          'Trello': 'https://trello.com/home',
          'View all products': 'https://www.atlassian.com/software'
        };
  
        var productUrl = productUrls[productName];
  
        window.open(productUrl, '_blank');
      });
    });
  

    var solutionsDropdownItems = document.querySelectorAll('.nav-item.solutions .dropdown-item');
  
    solutionsDropdownItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
  
        var solutionName = item.textContent.trim();
        var solutionUrls = {
          'Work Management': 'https://www.atlassian.com/solutions/work-management',
          'IT Service Management': 'https://www.atlassian.com/solutions/itsm',
          'Agile & DevOps': 'https://www.atlassian.com/solutions/devops'
        };
  
        var solutionUrl = solutionUrls[solutionName];
  
        window.open(solutionUrl, '_blank');
      });
    });
  });
  
  document.querySelector('.btn-outline-primary').addEventListener('click', function () {
    window.location.href = 'https://id.atlassian.com/login?continue=https%3A%2F%2Fwww.atlassian.com%2Fgateway%2Fapi%2Fstart%2Fauthredirect';
});
  
const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function () {
        searchInput.style.display = 'inline-block';
        searchInput.focus();
    });

    searchInput.addEventListener('blur', function () {
        searchInput.style.display = 'none';
    });
  
//  below navbar
document.addEventListener('DOMContentLoaded', function () {
    var getItFreeButton = document.getElementById('getItFreeButton');
    var featuresLink = document.getElementById('featuresLink');
    var productGuideLink = document.getElementById('productGuideLink');
    var templatesLink = document.getElementById('templatesLink');
    var pricingLink = document.getElementById('pricingLink');
    var enterpriseLink = document.getElementById('enterpriseLink');
  
    var links = {
      'Features': 'https://www.atlassian.com/software/jira/features',
      'Product guide': 'https://www.atlassian.com/software/jira/guides/getting-started/introduction',
      'Templates': 'https://www.atlassian.com/software/jira/templates',
      'Pricing': 'https://www.atlassian.com/software/jira/pricing',
      'Enterprise': 'https://www.atlassian.com/software/jira/enterprise',
      'Get it free': 'https://www.atlassian.com/software/jira/free'
    };
  
    function openLink(linkKey) {
      var url = links[linkKey];
      window.open(url, '_blank');
    }
  
    getItFreeButton.addEventListener('click', function () {
      openLink('Get it free');
    });
  
    featuresLink.addEventListener('click', function () {
      openLink('Features');
    });
  
    productGuideLink.addEventListener('click', function () {
      openLink('Product guide');
    });
  
    templatesLink.addEventListener('click', function () {
      openLink('Templates');
    });
  
    pricingLink.addEventListener('click', function () {
      openLink('Pricing');
    });
  
    enterpriseLink.addEventListener('click', function () {
      openLink('Enterprise');
    });
  });
  

//   content 1
  document.addEventListener('DOMContentLoaded', function () {
    var getItFreeButton = document.getElementById('getItFreeButton3');

    
    var getItFreeURL = 'https://www.example.com/get-it-free';

    
    getItFreeButton.addEventListener('click', function () {
      
      window.location.href = getItFreeURL;
    });
  });


//   content 3
document.addEventListener('DOMContentLoaded', function () {
    var learnMoreButtons = document.querySelectorAll('.learn-more');

    var urls = {
        'Scrum': 'https://www.atlassian.com/software/jira/templates/scrum',
        'Kanban': 'https://www.atlassian.com/software/jira/templates/kanban',
        'Bug tracking': 'https://www.atlassian.com/software/jira/templates/bug-tracking',
        'DevOps': 'https://www.atlassian.com/software/jira/templates/devops'
    };

    learnMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var category = this.closest('.col-lg-4').querySelector('h2').textContent;
            var url = urls[category];
            if (url) {
                window.location.href = url;
            }
        });
    });
});

// content 4
document.addEventListener('DOMContentLoaded', function () {
    var exploreIntegrationsButton = document.getElementById('exploreIntegrations');

    exploreIntegrationsButton.addEventListener('click', function () {
        window.location.href = 'https://marketplace.atlassian.com/';
    });
});

// content 5
document.addEventListener('DOMContentLoaded', function () {
    var exploreDevOpsButton = document.getElementById('exploreDevOpsButton');

    exploreDevOpsButton.addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/solutions/devops';
    });
});

//content 6
document.addEventListener('DOMContentLoaded', function () {
    var learnAgileButton = document.getElementById('learnAgileButton');
    var teamPlaybookButton = document.getElementById('teamPlaybookButton');
    var communityButton = document.getElementById('communityButton');
    var learnDevOpsButton = document.getElementById('learnDevOpsButton');

    learnAgileButton.addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/agile';
    });

    teamPlaybookButton.addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/team-playbook';
    });

    communityButton.addEventListener('click', function () {
        window.location.href = 'https://community.atlassian.com/';
    });

    learnDevOpsButton.addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/devops';
    });
});

// content 7
document.addEventListener('DOMContentLoaded', function () {
    // Get it free button
    document.getElementById('getItFreeButton2').addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/software/jira/free';
    });

    // See features button
    document.getElementById('seeFeaturesButton').addEventListener('click', function () {
        window.location.href = 'https://www.atlassian.com/software/jira/features';
    });
});

// footer
document.getElementById("jira-software-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/jira";
});

document.getElementById("jira-align-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/jira/align";
});

document.getElementById("jira-service-management-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/jira/service-management";
});

document.getElementById("jira-product-discovery-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/jira/product-discovery";
});

document.getElementById("confluence-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/confluence";
});

document.getElementById("trello-footer").addEventListener("click", function () {
    window.location.href = "https://trello.com/home";
});

document.getElementById("bitbucket-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software/bitbucket";
});

document.getElementById("view-all-products-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/software";
});

document.getElementById("technical-support-footer").addEventListener("click", function () {
    window.location.href = "https://support.atlassian.com/";
});

document.getElementById("purchasing-licensing-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/licensing/purchase-licensing";
});

document.getElementById("atlassian-community-footer").addEventListener("click", function () {
    window.location.href = "https://community.atlassian.com/";
});

document.getElementById("knowledge-base-footer").addEventListener("click", function () {
    window.location.href = "https://confluence.atlassian.com/kb";
});

document.getElementById("marketplace-footer").addEventListener("click", function () {
    window.location.href = "https://marketplace.atlassian.com/";
});

document.getElementById("my-account-footer").addEventListener("click", function () {
    window.location.href = "https://id.atlassian.com/login?application=mac&continue=https://my.atlassian.com/products/index";
});

document.getElementById("create-support-ticket-footer").addEventListener("click", function () {
    window.location.href = "https://support.atlassian.com/contact/";
});

document.getElementById("partners-footer").addEventListener("click", function () {
    window.location.href = "https://support.atlassian.com/contact/";
});

document.getElementById("training-certification-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/university";
});

document.getElementById("documentation-footer").addEventListener("click", function () {
    window.location.href = "https://confluence.atlassian.com/alldoc/atlassian-documentation-32243719.html";
});

document.getElementById("developer-resources-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/developers";
});

document.getElementById("enterprise-services-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/enterprise/services";
});

document.getElementById("view-all-resources-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/resources";
});

document.getElementById("company-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/company";
});

document.getElementById("careers-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/company/careers";
});

document.getElementById("events-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/company/events";
});

document.getElementById("blogs-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/blog";
});

document.getElementById("atlassian-foundation-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassianfoundation.org/";
});

document.getElementById("investor-relations-footer").addEventListener("click", function () {
    window.location.href = "https://investors.atlassian.com/";
});

document.getElementById("trust-security-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/trust";
});

document.getElementById("contact-us-footer").addEventListener("click", function () {
    window.location.href = "https://www.atlassian.com/company/contact";
});


// below footer
document.getElementById('privacyPolicy').addEventListener('click', function () {
    window.location.href = 'https://www.atlassian.com/legal/privacy-policy';
});

document.getElementById('terms').addEventListener('click', function () {
    window.location.href = 'https://www.atlassian.com/legal/cloud-terms-of-service';
});

document.getElementById('impressum').addEventListener('click', function () {
    window.location.href = 'https://www.atlassian.com/legal/impressum';
});