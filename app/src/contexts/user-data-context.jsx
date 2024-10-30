import React, { createContext, useState, useEffect, useContext } from 'react';
import projects from '@src/data/projects.json';

import { attributes } from '@src/assets/firefly.md'

export const UserDataContext = createContext();
export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
    const [markdownComponents, setMarkdownComponents] = useState([]);

    useEffect(() => {
        async function loadMarkdownComponents() {
            const components = {};
            const markdownModules = import.meta.glob('../assets/*.md');
            // bind the md files to the components object
            await Promise.all(
                projects
                    .filter((project) => project.writeup !== "")
                    .map(async (project) => {
                        const {attributes, html} = await markdownModules[`../assets/${project.writeup}`]();
                        components[project.writeup] = {attributes, html};
                        return components[project.writeup]
                    })
            );
            setMarkdownComponents(components);
        }

        loadMarkdownComponents();
    }, []);

    const value = {
        markdownComponents,
        setMarkdownComponents,
    };

    return (
        <UserDataContext.Provider {...{value}}>
            {children}
        </UserDataContext.Provider>
    );
};
