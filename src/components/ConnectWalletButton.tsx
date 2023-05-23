import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Avatar, Box, Button, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const ConnectWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const connected = account && chain;
        return (
          <Box>
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant="primary"
                    onClick={openConnectModal}
                    size="md"
                    color="white"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} size="md">
                    Wrong network
                  </Button>
                );
              }
              return (
                <HStack>
                  <Button onClick={openChainModal} size="md">
                    {chain.hasIcon && (
                      <Box mr="10px">
                        {chain.iconUrl && (
                          <Avatar
                            name={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            size="xs"
                          />
                        )}
                      </Box>
                    )}
                    {chain.name}
                    <Icon as={MdOutlineKeyboardArrowDown} />
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    color="white"
                    onClick={openAccountModal}
                  >
                    {account.ensName ? account.ensName : account.displayName}
                  </Button>
                </HStack>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWalletButton;
