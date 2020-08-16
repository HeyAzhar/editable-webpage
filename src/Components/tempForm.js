import React, { useContext } from "react";
import { ContentContext } from "../Context/ContentContext";
import { Container, Label, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Handle Submit
const TempForm = ({ handleSubmit }) => {
  const context = useContext(ContentContext);

  //Get the input field updated to the context
  const updateField = (e) =>
    context.setContent({
      ...context.content,
      [e.target.id]: e.target.value,
    });

  return (
    <Container>
      <h1 className="p-5 text-center display-4">Edit The Template</h1>
      <Form onSubmit={handleSubmit}>
        {/*** Hero Sec ***/}

        <FormGroup>
          <Label for="hero">Hero Title</Label>
          <Input
            type="text"
            id="hero"
            value={context.content?.hero}
            onChange={updateField}
          />
        </FormGroup>

        {/***Hero Image Sec***/}

        <FormGroup>
          <Label for="heroImage">Hero Image</Label>
          <Input
            type="file"
            id="heroImage"
            onChange={(e) =>
              context.setContent({
                ...context.content,
                [e.target.id]: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
        </FormGroup>

        {/***Content Heading Sec***/}

        <FormGroup>
          <Label for="contentHeading">Content Heading</Label>
          <Input
            type="text"
            id="contentHeading"
            value={context.content?.contentHeading}
            onChange={updateField}
          />
        </FormGroup>

        {/***Content Text***/}

        <FormGroup>
          <Label for="contentText">Content Text</Label>
          <Input
            type="textarea"
            id="contentText"
            value={context.content?.contentText}
            onChange={updateField}
          />
        </FormGroup>
        <Button color="warning" onClick={handleSubmit}>
          <Link className="text-dark" to="/">
            Submit
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default TempForm;
