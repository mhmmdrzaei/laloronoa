import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure';
import { myStructure } from "./sanity/structure";
import {schemaTypes} from './sanity/schemas'
import {visionTool} from '@sanity/vision';


const config = defineConfig({
projectId: 'g93w8co1',
dataset: 'production',
title: 'La Llorona',
apiVersion: '2024-06-10',
basePath: '/admin',
plugins: [structureTool({structure:myStructure}),visionTool()],
schema: {
  types: schemaTypes,
},

})

export default config;