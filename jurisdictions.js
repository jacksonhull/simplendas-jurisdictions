// Add regions and jurisdictions here
exports.regions = {
  "regions": [
    {
      "name": "uk",
      "label": "United Kingdom",
      "jurisdictions": [
        {
          "name": "uk-en",
          "label": "English law",
          "description": "NDA valid in the England and Wales.",
          "limitations": "None noted",
          "language": "en-gb"
        }
      ]
    },
    {
      "name": "us",
      "label": "United States",
      "jurisdictions": [
        {
          "name": "us-ny",
          "label": "New York",
          "description": "NDA valid in New York.",
          "limitations": "None noted",
          "language": "en-us"
        },
        {
          "name": "us-ca",
          "label": "California",
          "description": "NDA valid in California.",
          "limitations": "None noted",
          "language": "en-us"
        }
      ]
    },
    {
      "name": "fr",
      "label": "France",
      "jurisdictions": [
        {
          "name": "fr",
          "label": "France",
          "description": "NDA valid in France.",
          "limitations": "None noted",
          "language": "fr-fr"
        }
      ]
    },
  ]
};

// Add NDAs here
exports.ndas = { 
  "ndas": [ 
  { "jurisdiction": "uk-en",
    "fields": [
      { "name": "company_name",
        "label": "Company name",
        "type": "text"
      },
      { "name": "company_registration_number",
        "label": "Registration number",
        "type": "text"
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea"
      },
      { "name": "signatory_name",
        "label": "Signatory name",
        "type": "text"
      },
      { "name": "signatory_title",
        "label": "Signatory title",
        "type": "text"
      }
    ]
  },
  { "jurisdiction": "us-ca",
    "fields": [
      { "name": "company_name",
        "label": "Company name",
        "type": "text"
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea"
      },
      { "name": "signatory_name",
        "label": "Signatory name",
        "type": "text"
      },
      { "name": "signatory_title",
        "label": "Signatory title",
        "type": "text"
      },
      { "name": "company_name",
        "label": "Company name",
        "type": "text"
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea"
      },
      { "name": "signatory_name",
        "label": "Signatory name",
        "type": "text"
      },
      { "name": "signatory_title",
        "label": "Signatory title",
        "type": "text"
      }
    ]
  },
  { "jurisdiction": "fr",
    "fields": [
      { "name": "company_name",
        "label": "Company name",
        "type": "text"
      },
      { "name": "company_registration_number",
        "label": "Registration number",
        "type": "text"
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea"
      },
      { "name": "signatory_name",
        "label": "Signatory name",
        "type": "text"
      },
      { "name": "signatory_title",
        "label": "Signatory title",
        "type": "text"
      }
    ]
  }]
};