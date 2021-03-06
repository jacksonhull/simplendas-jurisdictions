// Add regions here
exports.regions = {
  "uk": {
    "label": "United Kingdom",
    "jurisdictions": [
      {
        "name": "uk-en"
      }
    ]
  },
  "us": {
    "label": "United States",
    "jurisdictions": [
      {
        "name": "us-ca"
      }
    ]
  },
  "fr": {
    "label": "France",
    "jurisdictions": [
      {
        "name": "fr"
      }
    ]
  }
};

// Add jurisdictions here
exports.jurisdictions = { 
  "uk-en": {
    "label": "English Law",
    "description": "NDA valid in England and Wales.",
    "limitations": "None noted",
    "language": "en-gb",
    "company_fields": [
      { "name": "registration_number",
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
    ],
    "recipient_fields": [
      { "name": "company",
        "label": "Company",
        "type": "text",
        "mandatory": false,
        "force_upper": true
      },
      { "name": "title",
        "label": "Title",
        "type": "text",
        "mandatory": false,
        "force_upper": true
      },
      { "name": "co_contact",
        "label": "Meeting with?",
        "type": "text",
        "mandatory": true,
        "force_upper": true
      }
    ]
  },
  "us-ca": {
    "label": "California",
    "description": "NDA valid in California.",
    "limitations": "None noted",
    "language": "en-us",
    "company_fields": [
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
    ],
    "recipient_fields": [
      { "name": "company",
        "label": "Company",
        "type": "text",
        "mandatory": true,
        "force_upper": true
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea",
        "mandatory": true,
        "force_upper": true
      }
    ]
  },
  "fr": {
    "label": "France",
    "description": "NDA valid in France.",
    "limitations": "None noted",
    "language": "fr-fr",
    "company_fields": [
      { "name": "registration_number",
        "label": "Registration number",
        "type": "text"
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea"
      },
      { "name": "signatory_name",
        "label": "Nom",
        "type": "text"
      }
    ],
    "recipient_fields": [
      { "name": "co_contact",
        "label": "Nom du contact",
        "type": "text",
        "mandatory": true,
        "force_upper": true
      },
      { "name": "company",
        "label": "Société",
        "type": "text",
        "mandatory": false,
        "force_upper": true
      }
    ]
  }
};