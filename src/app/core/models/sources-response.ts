
export class SourcesResponse {
    status: string;
    sources: Source[];
}

export class Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
