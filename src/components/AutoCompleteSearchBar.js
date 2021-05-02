import React, { useState } from 'react'
import { useCombobox } from 'downshift'
import { Box, useColorMode, InputGroup, InputRightElement, Input, UnorderedList, ListItem } from '@chakra-ui/react'
import { GoLocation } from "react-icons/go";

const menuStyles = {
    maxHeight: 100,
    // maxWidth: 300,
    overflowY: 'scroll',
    backgroundColor: "#DCDCDC",
    padding: 0,
    listStyle: 'none',
    color:"black"
    // position: 'relative',
}

const comboboxStyles = { display: 'inline-block', marginLeft: '5px', width: '100%' }

function AutoCompleteSearchBar({ items, onChange }) {

    const [inputItems, setInputItems] = useState(items)
    
    // eslint-disable-next-line
    const { colorMode, toggleColorMode } = useColorMode()
    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            onChange(inputValue);
            setInputItems(
                items.filter(item =>
                    item.toLowerCase().startsWith(inputValue.toLowerCase()),
                ),
            )
        },
    })
    return (
        <>
            <div>

                <div style={comboboxStyles} {...getComboboxProps()}>
                    <Box d="flex">

                        <InputGroup>
                            <InputRightElement
                                pointerEvents="none"
                                children={<GoLocation color="gray.300" />}
                            />
                            {/* color={colorMode === "light" ? "black" : "white"} */}
                            <Input
                                color={colorMode === "light" ? "black" : "white"}
                                _placeholder={{ color: 'grey' }}
                                borderRadius="0" style={{ borderColor: "gray" }} borderLeftRadius="md"
                                placeholder="Enter city"{...getInputProps()} />
                        </InputGroup>



                        {/* <Input placeholder="Enter city"{...getInputProps()} />
                        {/* <Button
            {...getToggleButtonProps()}
            aria-label="toggle menu"

        >
            &#8595;
        </Button> */}
                    </Box>
                </div>

                <UnorderedList {...getMenuProps()} style={menuStyles}>
                    {isOpen &&
                        inputItems.map((item, index) => (
                            <ListItem
                                value={index}

                                style={
                                    highlightedIndex === index
                                        ? { backgroundColor: '#bde4ff' }
                                        : {}
                                }
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}

                            >
                                {item}
                            </ListItem>
                        ))}
                </UnorderedList>
            </div>
        </>
    )
}

export default AutoCompleteSearchBar
