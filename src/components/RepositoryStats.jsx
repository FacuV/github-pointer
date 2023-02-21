import { View } from "react-native"
import StyledText from "./StyledText"
import { parseThousands } from "../utils/functions"

const RepositoryStats = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
            <StyledText align='center' fontWeight='bold'>Stars</StyledText>
            <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Forks</StyledText>
            <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
            <StyledText align='center'>{props.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Rating</StyledText>
            <StyledText align='center'>{props.ratingAverage}</StyledText>
        </View>
    </View>
)

export default RepositoryStats