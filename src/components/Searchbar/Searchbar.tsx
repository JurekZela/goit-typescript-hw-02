import { FiSearch } from "react-icons/fi";
import { ISearchBar } from './Searchbar-types';
import { Header, FormStyles as Form, Button, Input } from './Searchbar-styled';

const Searchbar = ({ onSubmit }: ISearchBar) => {

        return ( 
          <Header>
            <Form onSubmit={onSubmit}>
                <Button type="submit">
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
        )
    };

    export default Searchbar;