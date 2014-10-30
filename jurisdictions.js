// Add regions here
exports.regions = {
  "uk": {
    "label": "United Kingdom",
    "jurisdictions": [
      {
        "name": "uk-en",
        "label": "English law",
        "description": "NDA valid in England and Wales.",
        "limitations": "None noted",
        "language": "en-gb"
      }
    ]
  },
  "us": {
    "label": "United States",
    "jurisdictions": [
      {
        "name": "us-ca",
        "label": "California",
        "description": "NDA valid in California.",
        "limitations": "None noted",
        "language": "en-us"
      }
    ]
  },
  "fr": {
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
  }
};

// Add jurisdictions here
exports.jurisdictions = { 
  "uk-en": {
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
        "mandatory": false
      },
      { "name": "title",
        "label": "Title",
        "type": "text",
        "mandatory": false
      },
      { "name": "company_contact",
        "label": "Meeting with?",
        "type": "text",
        "mandatory": true
      }
    ]
  },
  "us-ca": {
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
        "mandatory": true
      },
      { "name": "address",
        "label": "Address",
        "type": "textarea",
        "mandatory": true
      }
    ]
  },
  "fr": {
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
      { "name": "company_contact",
        "label": "Nom du contact",
        "type": "text",
        "mandatory": true
      },
      { "name": "company",
        "label": "Société",
        "type": "text",
        "mandatory": false
      }
    ]
  }
};