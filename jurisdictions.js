// Add regions and jurisdictions here
exports.regions = {
  "uk": {
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
  "us": {
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

// Add NDAs here
exports.ndas = { 
  "uk-en": {
    "label": "English law",
    "fields": [
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
  "us-ca" : {
    "fields": [
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
  "us-ny" : {
    "fields": [
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
  "fr": {
    "fields": [
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
  }
};