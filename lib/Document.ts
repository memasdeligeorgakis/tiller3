export interface Document {
    _id?: any
    _version?: number,
    _createdAt?: Date,
    _updatedAt?: Date,
    [property: string]: any
}