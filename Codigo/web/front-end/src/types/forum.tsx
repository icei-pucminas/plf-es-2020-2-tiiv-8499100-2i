export type ForumType = {
	id: number;
	title: string;
	originalPost: ForumPostType;
	forumPosts: ForumPostType[];
};

export type ForumPostType = {
	id: number;
	body: string;
	date: string;
	user: string;
	isOriginalPost: boolean;
	approved: boolean;
};
