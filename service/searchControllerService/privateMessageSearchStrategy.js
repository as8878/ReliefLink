import searchStrategy from './searchStrategy.js';
import messageModel from '../../models/messageModel.js';
import UserModel from '../../models/userModel.js';
class privateMessageSearchStrategy extends searchStrategy{
    async processSearch(wordList, limit, offset, sender, receiver) {

        if (wordList == "status"){
            const announcements = await UserModel.searchPrivateUsersByStatus(sender);
            return { result: announcements.slice(offset, offset + limit), type: "returnUsers" };
        }
    
        // Check if wordList is a string and convert it to an array
        if (typeof wordList == 'string') {
            wordList = wordList.split(' ').filter(word => word.trim() !== ''); // Split by spaces and remove empty entries
        }

        if(typeof wordList !== 'object' || !Array.isArray(wordList)){
            throw new Error('Invalid word list');
        }
    
        // Fetch announcements using a single call with all words
        const announcements = await messageModel.searchPrivateMessageBywords(sender, receiver, wordList);
    
        // Return paginated results
        return { result: announcements.slice(offset, offset + limit), type: "returnMessages" };
    }  
}
export default privateMessageSearchStrategy;