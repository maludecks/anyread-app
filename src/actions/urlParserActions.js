/*
* action types
*/
export const PARSE_URL = 'PARSE_URL';

/*
* action creators
*/
export function parseUrl(url) {
  return {
    type: PARSE_URL,
    payload: {
      article: fetchArticle(url),
      url
    }
  }
}

const fetchArticle = (url) => {
  if (url === '')
    return;

  return {
    original_url: 'https://article-url.com/bGfggRE',
    site_name: 'Website name',
    author: 'Malu Decks',
    title: 'This is an article',
    html:  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a mollis dui, et luctus enim. Nunc dignissim maximus ligula. In tristique, ligula vel malesuada blandit, orci purus hendrerit leo, at ultricies dolor ex ut massa. Duis rhoncus augue est, ut dictum lectus tempor et. Integer ultricies in mi vitae aliquam. Mauris a dolor sit amet risus placerat tincidunt eget a erat. Nam gravida sollicitudin est, in pretium ex commodo dictum. Integer tellus nunc, ultrices eu semper sed, commodo vel arcu. In et mi tincidunt, vulputate dolor at, ultrices turpis. Duis eros est, gravida sed massa quis, iaculis rutrum ante. Donec malesuada mattis nisi eget egestas. Mauris semper lacus ut enim fermentum interdum. Nulla congue bibendum quam, a eleifend lectus gravida at. Suspendisse fermentum, turpis id iaculis aliquam, neque mauris luctus lorem, ac dignissim lacus elit quis magna. In iaculis libero ut dolor consectetur semper.</p>\n<p>Ut vel tellus eget lorem feugiat congue porta eu diam. Nunc lobortis in nibh eu mollis. Mauris rhoncus purus nec rutrum mollis. Cras dolor tortor, posuere eget dictum a, luctus non est. Nulla pulvinar congue pharetra. Etiam feugiat id ante at gravida. Donec mattis nisl lectus, id tincidunt mi auctor fermentum. In maximus, nisl maximus faucibus sagittis, est turpis accumsan mauris, non rutrum metus arcu nec urna. Phasellus lorem tellus, tristique facilisis dolor a, tincidunt commodo magna. Quisque ut lorem at orci vehicula maximus sit amet quis nibh. Phasellus elementum neque ut risus maximus dignissim.</p>\n<p>Vivamus venenatis metus non libero condimentum, a pretium mi tempus. Donec eu odio molestie, posuere dolor ac, euismod est. In accumsan id sapien vehicula facilisis. Integer convallis, nunc eu faucibus elementum, elit nulla faucibus nulla, ac fermentum nulla felis quis justo. Vivamus ut massa sit amet tortor rutrum lobortis id et arcu. Nunc nec ante quis justo dapibus lacinia sit amet quis nunc. Nam placerat massa et leo vulputate, vel tempus mi dictum.</p>\n<p>Morbi vehicula nunc id nisl vehicula, tempus dictum massa ultricies. In hac habitasse platea dictumst. Mauris ut tincidunt turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nisi odio, rhoncus vitae placerat non, vulputate ac quam. Maecenas magna lacus, egestas eget risus a, placerat egestas orci. Sed vitae orci ipsum. Vivamus non elementum eros. Curabitur sit amet lacus eu leo tincidunt accumsan quis quis velit. Donec interdum dignissim nibh, ut ultrices velit eleifend sit amet. Phasellus in urna lacus. Suspendisse tortor lorem, lobortis sed cursus eget, condimentum id sapien. In eget odio mollis, aliquet risus vitae, blandit ipsum. Quisque ac dui mollis, fringilla nisl id, sagittis mi.</p>\n<p>Mauris elementum eros leo, at euismod enim commodo sed. Aenean nec pulvinar ligula. Nullam euismod, risus nec gravida semper, mauris neque dignissim felis, nec iaculis dui orci nec arcu. Curabitur sed ante metus. Morbi et pellentesque massa. Vestibulum hendrerit dapibus felis, eu suscipit odio elementum vitae. Vestibulum dictum augue id lectus euismod aliquam. Praesent et feugiat sapien. In risus odio, finibus quis libero et, vestibulum viverra diam. Mauris rutrum lectus nec magna posuere, a vehicula eros pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempor, neque et fermentum auctor, arcu nisi tincidunt enim, sit amet posuere urna turpis et orci.</p>"
  }
}
