import {defineField, defineType} from 'sanity'

export default defineType({

    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96, }
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ]
})