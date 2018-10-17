import React, {
  Component
} from 'react';
import logo from './hero-user-logo.svg';
import './UserForm.css';
import './bootstrap.min.css';
import Form from "react-jsonschema-form";


const schema = {
  definitions: {
    country_list: {
      type: "string",
      enum: [
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Bolivia",
        "Brazil",
        "Bulgaria",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands",
        "Chile",
        "China",
        "Colombia",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Dominican Republic",
        "Egypt",
        "Estonia",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyzstan",
        "Latvia",
        "Lebanon",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malaysia",
        "Maldives",
        "Mauritius",
        "Mexico",
        "Moldova (Republic of)",
        "Monaco",
        "Mongolia",
        "Morocco",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nigeria",
        "Korea (Democratic People's Republic of)",
        "Norway",
        "Oman",
        "Pakistan",
        "Panama",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Romania",
        "Russian Federation",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "Korea (Republic of)",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Tajikistan",
        "Thailand",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom of Great Britain and Northern Ireland",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    }
  },
  title: "Registration Form For Heros",
  description: "Registration form, please check you complete fields marked as * ...",
  type: "object",
  properties: {
    about: {
      title: "About You",
      type: "object",
      required: ["firstname", "lastname", "age"],
      properties: {
        firstname: {
          type: "string",
          minLength: 3,
          title: "First Name"
        },
        lastname: {
          type: "string",
          minLength: 1,
          title: "Last Name"
        },
        age: {
          type: "integer",
          title: "Age",
          "minimum": 18,
          "maximum": 100
        },
        briefinfo: {
          type: "string",
          maxLength: 200,
          title: "What's your super power?"
        }
      }
    },
    address: {
      title: "Address Details",
      type: "object",
      properties: {
        street: {
          type: "string",
          title: "Street name"
        },
        city: {
          type: "string",
          title: "City"
        },
        country: {
          $ref: "#/definitions/country_list",
          title: "Country"
        }
      }
    },
    contacts: {
      title: "Contact Details",
      type: "object",
      properties:{
        email: {type: "string", title: "Email"},
        phone: {type: "string", title: "Telephone" },
        social_media: { type: "string", title: "Social links", format: "uri"}
      }
    }
  }
};


const uiSchema = {
  about:{
    firstname: {
    },
  age: {
      "ui:widget": "range",
      "ui:description": "(minimum 18 y.o. )"
    },
    briefinfo: {
      "ui:widget": "textarea",
      "ui:autofocus": true,
      "ui:options": {"rows": 2}
    }
  },
  contacts: {
    social_media: {
      "ui:placeholder": "http://"
    }
  }


};

const formData = {
  
};

const log = (type) => console.log.bind(console, type);

class UserForm extends Component {
  render() {
    return ( <div>

      <header className = "DefaultForm-header" > 
      <img src = {logo}className = "DefaultForm-logo"alt = "logo"/>
      </header>

      <br/>
      <div className= "row"> 
      <Form className = "col-8 col-sm-6  offset-2"
      schema = {schema }
      uiSchema = { uiSchema}
      formData = {formData}

      onChange = {log("changed")}
      onSubmit = {log("submitted") }
      onError = {log("errors")}
      />
      </div>


      <footer className = "page-footer font-small " >
      <div className = "container text-center text-md-left" >
      <div className = "footer-copyright text-center" >
      <a href = "https://www.behance.net/jkontakt23f76a" > All images by Julia </a>
      </div>
      </div> 
      </footer>
      </div>
    );

  }
}

export default UserForm;
