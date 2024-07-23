export declare type SlidingDirectionType = 'forward' | 'backward';
export declare type Tags = {
	name: string;
	color: string;
};
export declare type AlertMode = 'basic' | 'info' | 'success' | 'warning' | 'error';

export interface PostMeta {
	title: string;
	createdDate: string;
	modifiedDate: string;
	tags: string[];
}

export interface BlogPost extends PostMeta {
	content: unknown;
}
