import { Formik } from 'formik';
import { FiSearch } from "react-icons/fi";
import { ISearchBar } from './Searchbar-types';
import { Header, FormStyles as Form, Button, Input } from './Searchbar-styled';


const Searchbar = ({ onSubmit }: ISearchBar) => {

        return (
      <Formik>   
          <Header>
            <Form onSubmit={onSubmit}>
                <Button type="submit"  >
                    <FiSearch size="25"/>
                </Button>
                <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                  />
            </Form>
        </Header>
      </Formik>
        )
    };

    export default Searchbar;