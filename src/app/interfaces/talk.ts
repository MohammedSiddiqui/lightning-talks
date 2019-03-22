export interface Talk {
  dateModified: Date;
  dateScheduled: Date;
  dateSubmitted: Date;
  dislikeCount: number;
  isActive: boolean;
  isSpecialTalk: boolean;
  likeCount: boolean;
  likeList: string[];
  speakerEmailList: string[];
  speakerSlackList: string[];
  talkExcerpt: string;
  talkTitle: string;
  urlPresentation: string;
  urlVideo: string;
}
