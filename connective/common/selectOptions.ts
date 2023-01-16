import {Industry, Occupation} from "../types/types"

const events: Industry = {
    id: 0,
    name: "Event Management / Planning",
    occupations: [
        {
            id: 0,
            name: "DJ"
        },
        {
            id: 1,
            name: "Photographer"
        },
        {
            id: 2,
            name: "Videographer"
        },
        {
            id: 3,
            name: "Wedding Band"
        },
        {
            id: 4,
            name: "Caterer"
        },
        {
            id: 5,
            name: "Venue Manager"
        },
        {
            id: 6,
            name: "Event Planner"
        },
        {
            id: -1,
            name: "Other"
        }
    ]
}

const web: Industry = {
    id: 1,
    name: "Web Design / Development / Marketing",
    occupations: [
        {
            id: 8,
            name: "Developer"
        },
        {
            id: 9,
            name: "Dev Studio"
        },
        {
            id: 10,
            name: "Designer"
        },
        {
            id: 11,
            name: "Design Studio"
        },
        {
            id: 12,
            name: "Marketer"
        },
        {
            id: 13,
            name: "Marketing Studio"
        },
        {
            id: -1,
            name: "Other"
        }
    ]
}

const other: Industry = {
    id: 3,
    name: "Other",
    occupations: [
        {
            id: -1,
            name: "Other"
        }
    ]
}

const SAAS: Industry = {
    id: 4,
    name: "SAAS",
    occupations: [
        {
            id: -1,
            name: "Other"
        }
    ]
}

export const industries: Industry[] = [
    events,
    web,
    SAAS,
    other,
]

/*
exports.categoryOptions = [
    {value: "0", label: "All"},
    {value: '1', label: 'Arts and Culture'},
    {value: '2', label: 'Blockchain and Crypto Currency'},
    {value: '3', label: 'Community Mobilization'},
    {value: '4', label: 'Creative Production'},
    {value: '5', label: 'Education'},
    {value: '6', label: 'Entrepreneurship'},
    {value: '7', label: 'Fashion and Style'},
    {value: '8', label: 'Food and Drink'},
    {value: '9', label: 'Government and Politics'},
    {value: '10', label: 'Health and Self-Improvement'},
    {value: '11', label: 'Journalism and Publishing'},
    {value: '12', label: 'Local Interest'},
    {value: '13', label: 'Marketing and Sales'},
    {value: '14', label: 'Nonprofits and Volunteering'},
    {value: '15', label: 'Operations'},
    {value: '16', label: 'Product, Design, and UX'},
    {value: '17', label: 'Products and Consumer Reviews'},
    {value: '18', label: 'Professional'},
    {value: '19', label: 'Real Estate'},
    {value: '20', label: 'Science and Technology'},
    {value: '21', label: 'Sports and Games'},
    {value: '22', label: 'Travel and Outdoors'},
]

exports.industryOptions = [
    { value: -1, label: 'All'},
    { value: 0, label: 'Administrative Services' },
    { value: 1, label: 'Advertising' },
    { value: 2, label: 'Agriculture and Farming' },
    { value: 3, label: 'Alumni' },
    { value: 4, label: 'Apps' },
    { value: 5, label: 'Artificial Intelligence' },
    { value: 6, label: 'Association' },
    { value: 7, label: 'B2B' },
    { value: 8, label: 'B2C' },
    { value: 9, label: 'Biotechnology' },
    { value: 10, label: 'Blockchain' },
    { value: 11, label: 'Charity' },
    { value: 12, label: 'Clothing and Apparel' },
    { value: 13, label: 'Collaboration' },
    { value: 14, label: 'Collaborative' },
    { value: 15, label: 'Commerce and Shopping' },
    { value: 16, label: 'Commercial' },
    { value: 17, label: 'Community and Lifestyle' },
    { value: 18, label: 'Consumer' },
    { value: 19, label: 'Consumer Electronics' },
    { value: 20, label: 'Consumer Goods' },
    { value: 21, label: 'Consumption' },
    { value: 22, label: 'Content and Publishing' },
    { value: 23, label: 'Crowdsourcing' },
    { value: 24, label: 'Customer Service' },
    { value: 25, label: 'Data and Analytics' },
    { value: 26, label: 'Design' },
    { value: 27, label: 'Desktop Apps' },
    { value: 28, label: 'Education' },
    { value: 29, label: 'Emerging Markets' },
    { value: 30, label: 'Energy' }, 
    { value: 31, label: 'Enterprise' },
    { value: 32, label: 'Ethereum' },
    { value: 33, label: 'Events' },
    { value: 34, label: 'Financial Services' },
    { value: 35, label: 'Food and Beverage' },
    { value: 36, label: 'Franchise' },
    { value: 37, label: 'Freemium' },
    { value: 38, label: 'Gaming' },
    { value: 39, label: 'Generation Y' },
    { value: 40, label: 'Generation Z' },
    { value: 41, label: 'Government and Military' },
    { value: 42, label: 'Hardware' },
    { value: 43, label: 'Health Care' },
    { value: 44, label: 'Homeless Shelter' },
    { value: 45, label: 'Information Technology' },
    { value: 46, label: 'Infrastructure' },
    { value: 47, label: 'Internet Services' },
    { value: 48, label: 'Knowledge Management' },
    { value: 49, label: 'LGBT' },
    { value: 50, label: 'Lending and Investments' },
    { value: 51, label: 'Manufacturing' },
    { value: 52, label: 'Media and Entertainment' },
    { value: 53, label: 'Messaging and Telecommunications' },
    { value: 54, label: 'Millennials' },
    { value: 55, label: 'Mobile' },
    { value: 56, label: 'Music and Audio' },
    { value: 57, label: 'Natural Resources' },
    { value: 58, label: 'Navigation and Mapping' },
    { value: 59, label: 'Non Profit' },
    { value: 60, label: 'Payments' },
    { value: 61, label: 'Peer to Peer' },
    { value: 62, label: 'Platforms' },
    { value: 63, label: 'Privacy and Security' },
    { value: 64, label: 'Product Management' },
    { value: 65, label: 'Professional Services' },
    { value: 66, label: 'Professional Services' },
    { value: 67, label: 'Project Management' },
    { value: 68, label: 'Real Estate' },
    { value: 69, label: 'Real Time' },
    { value: 70, label: 'Retirement Service Industry' },
    { value: 71, label: 'Sales and Marketing' },
    { value: 72, label: 'Science and Engineering' },
    { value: 73, label: 'Sharing Economy' },
    { value: 74, label: 'Small and Medium Businesses' },
    { value: 75, label: 'Social Bookmarking' },
    { value: 76, label: 'Social Impact' },
    { value: 77, label: 'Software' },
    { value: 78, label: 'Sports' },
    { value: 79, label: 'Subscription Service' },
    { value: 80, label: 'Sustainability' },
    { value: 81, label: 'Technical Support' },
    { value: 82, label: 'Transportation' },
    { value: 83, label: 'Travel and Tourism' },
    { value: 84, label: 'Underserved Children' },
    { value: 85, label: 'Universities' },
    { value: 86, label: 'Video' },
    { value: 87, label: 'Other'}
]
*/

