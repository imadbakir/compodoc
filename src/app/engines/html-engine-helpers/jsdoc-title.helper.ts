import { JsdocTagInterface } from '../../interfaces/jsdoc-tag.interface';
import { IHtmlEngineHelper, IHandlebarsOptions } from './html-engine-helper.interface';

export class JsdocTitleHelper implements IHtmlEngineHelper {
    public helperFunc(context: any, jsdocTags: JsdocTagInterface[], options: IHandlebarsOptions) {
        let i = 0;
        let len = jsdocTags.length;
        let tags = [];

        for (i; i < len; i++) {
            if (jsdocTags[i].tagName) {
                if (jsdocTags[i].tagName.text === 'title') {
                    let tag = {} as JsdocTagInterface;
                    if (jsdocTags[i].comment) {
                        tag.comment = jsdocTags[i].comment;
                    }
                    tags.push(tag);
                }
            }
        }
        if (tags.length > 0) {
            context.tags = tags;
            return options.fn(context);
        }
    }
}
