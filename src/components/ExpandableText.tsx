import {useState} from "react";
import {Button, Text} from "@chakra-ui/react";

interface ExpandableTextProps {
    children: string;
}

const ExpandableText = ({children}: ExpandableTextProps) => {
    const [expanded, setExpanded] = useState(false)
    const limit = 300;
    if (!children) return null
    if (children.length <= limit)
        return <Text>{children}</Text>
    const summary = expanded ? children : children.substring(0, limit) + '...'
    return (
        <Text>
            {summary}
            <Button onClick={() => setExpanded(!expanded)} size="xs" fontWeight="bold"
                    colorScheme="yellow" marginLeft={1}>{expanded ? 'Show less' : 'Read more'}</Button>
        </Text>
    );
};

export default ExpandableText;
