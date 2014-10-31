Simple NDA's
========================

Simple NDA's is about nothing more than simple NDA's.

To create or modify an NDA for use in your Jurisdiction, follow these guidelines and submit a pull request.

## Regions and Jurisdictions
A Region is a country, as defined by the [two-digit ISO country codes](http://en.wikipedia.org/wiki/ISO_3166-1).

A Jurisdiction is the combination of a Region and the legal system within which the NDA is valid.  

## Jurisdiction naming
The naming convention is (region)-(legal system). For example, the English law Jurisdiction in the United Kingdom is *uk-en*, and the California state law Jurisdiction is *us-ca*.

## Adding a Region
Get started by adding a Region in the *regions* object in [*jurisdications.js*](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/jurisdictions.js), including a reference to any Jurisdiction(s) by name.

    exports.regions = {
      "uk": {
        "label": "United Kingdom",
        "jurisdictions": [
          {
            "name": "uk-en"
          }
        ]
      }
    }

## Fields in the NDA

Additional fields will likely be required when creating a new NDA.  Refer to the NDA template you intend to add to determine what fields should be added to the defaults.  Basically if there is information that is specific to the Company or recipient, it will need to be variable-ized into a field.

### Jurisdiction fields
Provide a Region label, and a name, label, description, limitations of and language of the NDA for the Jurisdiction in the Jurisdictions object.  
Note that the name of the Jurisdiction from the Region must match the key for the Jurisdiction (e.g. "uk-en").

    exports.jurisdictions = { 
      "uk-en": {
        "label": "English law",
        "description": "NDA valid in England and Wales.",
        "limitations": "None noted",
        "language": "en-gb"
      }
    }

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

### Put it all together

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
      }
    }

## NDA templates
NDA templates are stored under [*/nda*](https://github.com/jacksonhull/simplendas-jurisdictions/tree/master/nda) and are named as the Jurisdiction.

### Markdown
The NDA templates are [markdown](https://daringfireball.net/projects/markdown/basics) files, with the extension *.md*.

The template can render anything markdown can.  For example, [*uk-en.md*](https://github.com/jacksonhull/simplendas-jurisdictions/blob/master/nda/uk-en.md) starts with the markdown below, which renders a corresponding *h1* and *p* element correspondingly.

    # NONDISCLOSURE AGREEMENT
    THIS NONDISCLOSURE AGREEMENT (this "Agreement") is made and entered ...

There are some additions to the standard markdown syntax to note:

### Substitutions
You can substitute fields during NDA rendering by prepending a __:__.  

Company fields will render the values.

Recipient fields will render input elements.

Examples:

* :company_name will render the text of the Company's name
* :recipient_name will render an input of type text to record the Recipient's name

### Macros
You can include macros, which execute during rendering and/or display.

Built-in macros include:

* ~date:format~ will return the date in the format provided (null will return format *fullDate*) 
* ~submit:text~ will return a submit button with the text
* ~agree adds a required checkbox element

You can also include any Recipient field input like ~recipient-field.  The macro will return the label in CAPS by default, and replace it with the value entered in the input.

### Helpers

Append .line to any Company field to return it as a single, comma-delimited line.

## API
You can access signatures for your company using the endpoint:

    https://www.simplendas.com/api/signs/<jurisdiction>/<company-slug>/<token>

For example, if your NDA is found at:

    https://www.simplendas.com/nda/uk-en/joes-plumbing

And, your token is A1B2C3D4E5, then the endpoint is:

    https://www.simplendas.com/api/signs/uk-en/joes-plumbing/A1B2C3D4E5

Note that the endpoint can also be found in the activation confirmation email.

### Importing your signatures into Google Spreadsheets

Follow the instructions [in this post](https://medium.com/@paulgambill/how-to-import-json-data-into-google-spreadsheets-in-less-than-5-minutes-a3fede1a014a), using the API endpoint.

## Usage and License
By contributing to this project, you agree to be bound by the [Terms and Conditions](https://www.simplendas.com/terms) of the Simple NDA's website.

All templates located in the */nda* folder are licensed under the [Creative Commons Attribution ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/).

