Simple NDA's
========================

Simple NDA's is about nothing more than simple NDA's.

To create or modify an NDA for use in your Jurisdiction, follow these guidelines and submit a pull request.

## Regions and Jurisdictions
A Region is a country, as defined by the [two-digit ISO country codes](http://en.wikipedia.org/wiki/ISO_3166-1).

A Jurisdiction is the combination of a Region and the legal system within which the NDA is valid.  

## Jurisdiction naming
The naming convention is (region)-(legal system). For example, the English law Jurisdiction in the United Kingdom is *uk-en*, and the California state law Jurisdiction is *us-ca*.

## Adding a Jurisdiction
Get started by adding a Region in the *regions* object in [*jurisdications.js*](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/jurisdictions.js), including a reference to the Jurisdiction.  Provide a Region label, and a name, label, description, limitations of and language of the nda for the Jurisdiction.

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
      }
    }

## Fields in the NDA

Additional fields will likely be required when creating a new NDA.  Refer to the NDA template you intend to add to determine what fields should be added to the defaults.  Basically if there is information that is specific to the Company or recipient, it will need to be variable-ized into a field.

### Company fields
Company fields are inputs for the creation of an NDA.  

The Company fields appear as text in the NDA template.

The default, required Company fields are:
* Company name (text, mandatory) -- the name of the Company creating the NDA
* Company email (text, mandatory) -- the email address of the Company 

Configure additional Company fields for the NDA in the *company_fields* list in [*jurisdications.js*](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/jurisdictions.js) by adding a *name*, *label* and *type* for each.  Note that additional Company fields are validated as mandatory.

For example, the *uk-en* Jurisdiction has an additional four Company fields for use in the [NDA template](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/nda/uk-en.md).

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
        ]
      }
    }

### Recipient fields
Recipient fields are inputs for signatories of an NDA.  

The Recipient fields appear as input fields in the NDA template.  The *label* is used for the input *type* of each field.  Recipient fields are validated based on the value in *mandatory*.

The default, required Recipient fields are:
* Recipient name (text, mandatory) -- the name of the Recipient signing the NDA
* Recipient email (text, mandatory) -- the email address of the Recipient 

Configure additional Recipient fields for the NDA in the *recipient_fields* list in [*jurisdications.js*](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/jurisdictions.js) by adding a name, label and type for each.

For example, the *uk-en* Jurisdiction has an additional three Recipient fields for use in the [NDA template](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/nda/uk-en.md).

    exports.jurisdictions = { 
      "uk-en": {
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
            "label": "Company contact",
            "type": "text",
            "mandatory": true
          }
        ]
      }
    }

## NDA templates
