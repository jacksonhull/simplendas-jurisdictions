Simple NDA's
========================

Simple NDA's is about nothing more than simple NDA's.

To create or modify an NDA for use in your jurisdiction, follow these guidelines and submit a pull request.

## Regions and Jurisdictions
A Region is a country, as defined by the [two-digit ISO country codes](http://en.wikipedia.org/wiki/ISO_3166-1).

A Jurisdiction is the combination of a Rwgion and the legal system within which the NDA is valid.  

### Jurisdiction naming
The naming convention is (region)-(legal system). For example, the English law Jurisdiction in the United Kingdom is "uk-en", and the California state law Jurisdiction is "us-ca".

### Adding a Jurisdiction
Get started by adding a Region in the *regions* object in *[jurisdications.js]*(https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/jurisdictions.js), including a reference to the Jurisdiction.  Provide a Region label, and a name, label, description, limitations of and language of the nda for the Jurisdiction.

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
      }
    };

